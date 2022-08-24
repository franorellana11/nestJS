import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

import { ProductsService } from '../services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  products() {
    return this.productsService.findAll();
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
    return this.productsService.findOne(+productId);
  }

  @Post()
  create(@Body() payload: any) {
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return this.productsService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productsService.remove(+id);
  }
}
