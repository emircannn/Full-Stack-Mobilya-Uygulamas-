import { IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateCategoryDto {
    @IsOptional()
    name?: string;

    @IsOptional()
    parentId?: string;

    @IsNotEmpty({ message: 'Id Alanı boş olamaz!' })
    id: string;
}
