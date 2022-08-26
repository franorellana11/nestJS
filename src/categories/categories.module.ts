import { Module } from '@nestjs/common';
import { CategoriesController } from '../categories/controllers/categories.controller';
import { CategoriesService } from '../categories/services/categories.service';
import { ProductsModule } from '../products/products.module';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService],
  imports: [ProductsModule],
})
export class CategoriesModule {}
