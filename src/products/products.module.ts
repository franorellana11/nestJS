import { Module } from '@nestjs/common';

import { ProductsController } from '../products/controllers/products.controller';
import { ProductsService } from '../products/services/products.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [ProductsService],
})
export class ProductsModule {}
