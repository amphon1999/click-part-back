import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { Categories } from './entities/categories.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from 'src/products/entities/products.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Categories,Products])],
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule {}
