import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateCategorietDto } from 'src/categories/dto/categories.dto';

import { CategoriesService } from '../services/categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private categorieService: CategoriesService) {}
  @Get()
  categories() {
    return this.categorieService.findAll();
  }

  @Get(':id')
  getCategoriesOne(@Param('id', ParseIntPipe) id: number) {
    return this.categorieService.findOne(id);
  }

  @Get(':id/products')
  getCategoriesWithProducts(@Param('id', ParseIntPipe) id: number) {
    return this.categorieService.getProductsByCategories(id);
  }

  @Post()
  create(@Body() payload: CreateCategorietDto) {
    return this.categorieService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return this.categorieService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.categorieService.remove(id);
  }
}
