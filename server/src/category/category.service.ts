import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { PrismaService } from 'prisma/prisma.service';
import { errorReturn, generateSeo, successReturn } from 'utils/helpers';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { unlink } from 'fs';

@Injectable()
export class CategoryService {
    constructor(private prisma: PrismaService) {}

    async create(dto: CreateCategoryDto, image: string) {
        const seo = await generateSeo(dto.name, this.prisma);
        const data = {
            name: dto.name,
            parentId: parseInt(dto.parentId) || null,
            seo,
            image,
        };

        await this.prisma.category.create({ data: data });

        return successReturn({});
    }

    async delete(id: number) {
        const isExist = await this.prisma.category.findUnique({
            where: { id },
            select: { image: true },
        });

        if (!isExist) return errorReturn('Böyle bir kategori Bulunamadı');

        unlink(`dist/${isExist.image}`, err => {
            if (err) {
                console.error('Dosya silinirken bir hata oluştu:', err);
                return errorReturn('Lütfen tekrar deneyin.');
            }
            console.log('Dosya başarıyla silindi');
        });

        await this.prisma.category.delete({ where: { id } });

        return successReturn({});
    }

    async update(dto: UpdateCategoryDto, image: string | null) {
        const category = await this.prisma.category.findUnique({
            where: { id: parseInt(dto.id) },
        });

        if (!category) return errorReturn('Kategori Bulunamadı');

        if (image) {
            unlink(`dist/${category.image}`, err => {
                if (err) {
                    console.error('Dosya silinirken bir hata oluştu:', err);
                    return errorReturn('Lütfen tekrar deneyin.');
                }
                console.log('Dosya başarıyla silindi');
            });
        }

        const seo = dto.name
            ? await generateSeo(dto.name, this.prisma)
            : category.seo;

        const data = {
            image: image ? image : category.image,
            seo,
            name: dto.name ? dto.name : category.name,
            parentId: dto.parentId ? parseInt(dto.parentId) : category.parentId,
        };

        await this.prisma.category.update({
            where: { id: parseInt(dto.id) },
            data: data,
        });

        return successReturn({});
    }

    async getAll({ pageQ, limitQ }: { pageQ?: number; limitQ?: number }) {
        const page = pageQ || 1;
        const limit = limitQ || 10;
        const skip = (page - 1) * limit;
        const totalCount = await this.prisma.category.count();
        const categories = await this.prisma.category.findMany({
            select: {
                id: true,
                name: true,
                seo: true,
                image: true,
                parent: true,
                parentId: true,
                sub_categories: {
                    select: {
                        id: true,
                        name: true,
                        seo: true,
                        image: true,
                    },
                },
            },
            skip,
            take: limit,
        });

        categories.forEach(category => {
            if (category.image) {
                category.image = `${process.env.DOMAIN}/${category.image}`;
            }
            category.sub_categories.forEach(subCategory => {
                if (subCategory.image) {
                    subCategory.image = `${process.env.DOMAIN}/${subCategory.image}`;
                }
            });
        });
        const totalPages = Math.ceil(totalCount / limit);

        return successReturn({
            data: {
                categories,
                totalCount: totalCount,
                totalPages: totalPages,
            },
        });
    }

    async mainCategories({
        pageQ,
        limitQ,
    }: {
        pageQ?: number;
        limitQ?: number;
    }) {
        const page = pageQ || 1;
        const limit = limitQ || 10;
        const skip = (page - 1) * limit;

        const totalCount = await this.prisma.category.count({
            where: { parentId: null },
        });
        const categories = await this.prisma.category.findMany({
            where: {
                parentId: null,
            },
            select: {
                id: true,
                name: true,
                seo: true,
                image: true,
                sub_categories: {
                    select: {
                        id: true,
                        name: true,
                        seo: true,
                        image: true,
                    },
                },
            },
            skip,
            take: limit,
        });

        categories.forEach(category => {
            if (category.image) {
                category.image = `${process.env.DOMAIN}/${category.image}`;
            }
            category.sub_categories.forEach(subCategory => {
                if (subCategory.image) {
                    subCategory.image = `${process.env.DOMAIN}/${subCategory.image}`;
                }
            });
        });
        const totalPages = Math.ceil(totalCount / limit);

        return successReturn({
            data: {
                categories,
                totalCount: totalCount,
                totalPages: totalPages,
            },
        });
    }
}
