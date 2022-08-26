import { Module } from '@nestjs/common';
import { CategoriesController } from '../categories/controllers/categories.controller';
import { CategoriesService } from '../categories/services/categories.service';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule {}
