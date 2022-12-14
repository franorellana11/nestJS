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

  @Post()
  create(@Body() payload: any) {
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
