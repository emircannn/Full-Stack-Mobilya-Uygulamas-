import {
    Controller,
    Post,
    Body,
    UseInterceptors,
    UploadedFile,
    Get,
    Query,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import {
    CreateCategoryDto,
    DeleteCategoryDto,
} from './dto/create-category.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerOptions } from 'utils/helpers';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}

    @Post('create')
    @UseInterceptors(
        FileInterceptor('image', multerOptions('dist/uploads/categories')),
    )
    create(
        @Body() createCategoryDto: CreateCategoryDto,
        @UploadedFile() file: Express.Multer.File,
    ) {
        const imagePath = `uploads/categories/${file.filename}`;
        return this.categoryService.create(createCategoryDto, imagePath);
    }

    @Post('update')
    @UseInterceptors(
        FileInterceptor('image', multerOptions('dist/uploads/categories')),
    )
    update(
        @Body() dto: UpdateCategoryDto,
        @UploadedFile() file: Express.Multer.File,
    ) {
        const imagePath = file ? `uploads/categories/${file.filename}` : null;
        return this.categoryService.update(dto, imagePath);
    }

    @Post('delete')
    deleteCategory(@Body() dto: DeleteCategoryDto) {
        return this.categoryService.delete(dto.id);
    }

    @Get('getAll')
    getAll(@Query('page') page: string, @Query('limit') limit: string) {
        return this.categoryService.getAll({
            limitQ: parseInt(limit),
            pageQ: parseInt(page),
        });
    }
    @Get('mainCategories')
    mainCategories(@Query('page') page: string, @Query('limit') limit: string) {
        return this.categoryService.mainCategories({
            limitQ: parseInt(limit),
            pageQ: parseInt(page),
        });
    }
}
