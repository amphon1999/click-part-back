import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Products } from './entities/products.entity';
import { Categories } from 'src/categories/entities/categories.entity';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Products,Categories])],
    controllers: [
        ProductsController, ],
    providers: [
        ProductsService, ],
})
export class ProductsModule {}
