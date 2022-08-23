import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get()
  categories() {
    return `<h1> Endpoint Categories </h1>`;
  }

  @Get(':id/products/:productId')
  getCategoriesOne(
    @Param('productId') productId: string,
    @Param('id') id: string,
  ) {
    return {
      message: `Categories ${id} = ${productId}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'CREATE CATEGORIE',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return id;
  }
}
