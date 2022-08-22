import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  products() {
    return `<h1> Endpoint Products </h1>`;
  }

  @Get()
  getProducts(
    @Query('limit') limit = 10,
    @Query('offset') offset = 22,
    @Query('brand') brand: string,
  ) {
    return `products: limit => ${limit}, offset=> ${offset}, brand => ${brand}`;
  }

  @Get(':productId')
  getProduct(@Param('productId') productId: string) {
    return `product ${productId}`;
  }
}
