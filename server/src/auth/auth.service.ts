import { ForbiddenException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { SignupDto } from './dto/signup.dto';
import {
    CookieType,
    compareValues,
    errorReturn,
    hashValue,
    setCookie,
    successReturn,
} from 'utils/helpers';
import { MessageType, Tokens } from 'types';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { Response } from 'express';

@Injectable()
export class AuthService {
    constructor(
        private prsima: PrismaService,
        private jwtService: JwtService,
    ) {}

    //Kayıt Oluşturma
    async signup(dto: SignupDto, res: Response) {
        const matched = await this.IsUserExist(dto.email, dto.phone);

        if (matched) {
            return errorReturn(
                'Bu e-posta adresi veya telefon numarası zaten bir hesaba kayıtlıdır. Lütfen farklı bir e-posta adresi veya telefon numarası kullanın.',
            );
        }

        const password = await hashValue(dto.password);
        delete dto.password;
        const formatedValues = {
            ...dto,
            password: password,
        };

        const newUser = await this.prsima.user.create({ data: formatedValues });
        const tokens = await this.getTokens(newUser.id, newUser.email);
        await this.updateRToken(newUser.id, tokens.refresh_token);

        setCookie(res, CookieType.ACCESS, tokens.access_token);
        setCookie(res, CookieType.REFRESH, tokens.refresh_token);

        return res.status(HttpStatus.OK).json(successReturn({ data: tokens }));
    }

    //Giriş
    async login(dto: LoginDto, res: Response) {
        const user = await this.prsima.user.findUnique({
            where: { email: dto.email },
        });

        if (!user) return errorReturn('Kullanıcı Bulunamadı!');

        const passwordIsMatch = await compareValues(
            dto.password,
            user.password,
        );

        if (!passwordIsMatch) return errorReturn('Şifreniz Eşleşmiyor!');

        const tokens = await this.getTokens(user.id, user.email);
        await this.updateRToken(user.id, tokens.refresh_token);

        setCookie(res, CookieType.ACCESS, tokens.access_token);
        setCookie(res, CookieType.REFRESH, tokens.refresh_token);

        return res.status(HttpStatus.OK).json(successReturn({ data: tokens }));
    }

    //!Çıkış
    async logout(id: number): Promise<MessageType> {
        if (!id) return errorReturn('Oturum Bulunamadı!');

        const user = await this.prsima.user.findFirst({
            where: { id, refresh_token: { not: null } },
        });

        if (!user) {
            return errorReturn(
                'Kullanıcı Bulunamadı veya Oturum Zaten Sonlandırılmış.',
            );
        }

        await this.prsima.user.update({
            where: { id },
            data: { refresh_token: null },
        });

        return successReturn({ message: 'Çıkış İşlemi Başarılı.' });
    }

    //* Token Yenileme
    async refresh(id: number, rToken: string, res: Response) {
        const user = await this.prsima.user.findUnique({
            where: { id },
        });

        if (!user || !user.refresh_token) {
            throw new ForbiddenException('Erişim Engeli!');
        }

        const tokenIsMatch = await compareValues(rToken, user.refresh_token);

        if (!tokenIsMatch) throw new ForbiddenException('Erişim Engeli!');

        const tokens = await this.getTokens(id, user.email);
        await this.updateRToken(id, tokens.refresh_token);

        setCookie(res, CookieType.ACCESS, tokens.access_token);
        setCookie(res, CookieType.REFRESH, tokens.refresh_token);

        return res.status(HttpStatus.OK).json(successReturn({ data: tokens }));
    }

    //*Refresh Token Güncelleme
    async updateRToken(id: number, token: string) {
        const refresh_token = await hashValue(token);
        await this.prsima.user.update({
            where: { id },
            data: { refresh_token },
        });
    }

    //*Token Oluşturma
    async getTokens(userId: number, email: string): Promise<Tokens> {
        const access_token = this.jwtService.signAsync(
            {
                id: userId,
                email,
            },
            {
                secret: `${process.env.AT_SECRET}`,
                expiresIn: 60 * 1,
            },
        );

        const refresh_token = this.jwtService.signAsync(
            {
                id: userId,
                email,
            },
            {
                secret: `${process.env.RT_SECRET}`,
                expiresIn: 60 * 60 * 24 * 7,
            },
        );

        const [at, rt] = await Promise.all([access_token, refresh_token]);
        return {
            access_token: at,
            refresh_token: rt,
        };
    }

    async findWithEmail(email: string) {
        return await this.prsima.user.findUnique({ where: { email } });
    }

    async findWithId(id: number) {
        return await this.prsima.user.findUnique({ where: { id } });
    }

    async IsUserExist(email: string, phone: string) {
        const matched = await this.prsima.user.findFirst({
            where: {
                OR: [{ email }, { phone }],
            },
        });

        if (matched) {
            return true;
        }

        return false;
    }
}
