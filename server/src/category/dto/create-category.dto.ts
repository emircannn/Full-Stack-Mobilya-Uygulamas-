import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateCategoryDto {
    @IsNotEmpty({ message: 'Kategori ismi boş olamaz!' })
    readonly name: string;

    @IsOptional()
    readonly parentId: string;
}

export class DeleteCategoryDto {
    @IsNotEmpty({ message: 'Id alanı boş olamaz!' })
    readonly id: number;
}
