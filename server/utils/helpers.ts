import * as argon2 from 'argon2';
import { Response } from 'express';
import { existsSync, mkdirSync } from 'fs';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { PrismaService } from 'prisma/prisma.service';
import { transliterate } from 'transliteration';

export async function hashValue(password: string): Promise<string> {
    const hashedPassword = await argon2.hash(password);
    return hashedPassword;
}

export async function compareValues(
    value: string,
    hashedValue: string,
): Promise<boolean> {
    return await argon2.verify(hashedValue, value);
}

export function errorReturn(message?: string) {
    return {
        error: true,
        message: message || 'İşlem Başarısız!',
    };
}

export function successReturn({
    data,
    message,
}: {
    data?: any;
    message?: string;
}) {
    return {
        error: false,
        message: message || 'İşlem Başarılı.',
        data,
    };
}

export enum CookieType {
    ACCESS = 'access',
    REFRESH = 'refresh',
}

export function setCookie(res: Response, type: CookieType, value: string) {
    const expires = new Date();
    if (type === CookieType.ACCESS) {
        expires.setTime(expires.getTime() + 15 * 60 * 1000); // 15 dakika
    } else if (type === CookieType.REFRESH) {
        expires.setDate(expires.getDate() + 7); // 1 hafta
    }

    res.cookie(`${type}_token`, value, {
        httpOnly: true,
        expires: expires,
    });
}

export const generateSeo = async (
    name: string,
    prisma: PrismaService,
): Promise<string> => {
    const transliteratedName = transliterate(name);
    const baseSeo = transliteratedName
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
    let uniqueSeo = baseSeo;
    let suffix = 1;

    while (await prisma.category.findUnique({ where: { seo: uniqueSeo } })) {
        uniqueSeo = `${baseSeo}-${suffix}`;
        suffix++;
    }

    return uniqueSeo;
};

export const multerOptions = (destination: string) => ({
    storage: diskStorage({
        destination: (req, file, cb) => {
            const uploadPath = destination;
            if (!existsSync(uploadPath)) {
                mkdirSync(uploadPath, { recursive: true });
            }
            cb(null, uploadPath);
        },
        filename: (req, file, cb) => {
            const uniqueSuffix =
                Date.now() + '-' + Math.round(Math.random() * 1e9);
            cb(
                null,
                `${file.fieldname}-${uniqueSuffix}${extname(file.originalname)}`,
            );
        },
    }),
    fileFilter: (req, file, cb) => {
        // Kabul edilen resim dosya türleri
        const allowedTypes = /jpeg|jpg|png|gif|webp|bmp|tiff|svg/;
        const extName = allowedTypes.test(
            extname(file.originalname).toLowerCase(),
        );
        const mimeType = allowedTypes.test(file.mimetype);

        if (extName && mimeType) {
            return cb(null, true);
        } else {
            cb(
                new Error(
                    'Kabul edilmeyen dosya türü. Sadece resim dosyaları kabul edilir.',
                ),
            );
        }
    },
    limits: {
        fileSize: 10 * 1024 * 1024, // 10 MB
    },
});
