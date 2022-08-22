import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hola Mundo!';
  }

  @Get('products')
  getProducts(
    @Query('limit') limit = 10,
    @Query('offset') offset = 22,
    @Query('brand') brand: string,
  ) {
    return `products: limit => ${limit}, offset=> ${offset}, brand => ${brand}`;
  }

  @Get('products/:productId')
  getProduct(@Param('productId') productId: string) {
    return `product ${productId}`;
  }

  @Get('categories/:id/products/:productId')
  getCategories(
    @Param('productId') productId: string,
    @Param('id') id: string,
  ) {
    return `Categories ${id} = ${productId}`;
  }
}
