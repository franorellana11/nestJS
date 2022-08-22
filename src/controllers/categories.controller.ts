import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get()
  categories() {
    return `<h1> Endpoint Categories </h1>`;
  }

  @Get(':id/products/:productId')
  getCategories(
    @Param('productId') productId: string,
    @Param('id') id: string,
  ) {
    return `Categories ${id} = ${productId}`;
  }
}
