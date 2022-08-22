import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  products() {
    return `<h1> Endpoint Products </h1>`;
  }

  @Get()
  get(
    @Query('limit') limit = 10,
    @Query('offset') offset = 22,
    @Query('brand') brand: string,
  ) {
    return {
      message: `products: limit => ${limit}, offset=> ${offset}, brand => ${brand}`,
    };
  }

  @Get(':productId')
  getProductOne(@Param('productId') productId: string) {
    return {
      message: `product ${productId}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'CREATE PRODUCTS',
      payload,
    };
  }
}
