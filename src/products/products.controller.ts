import { MinLength } from 'class-validator';
/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards,UploadedFile, UseInterceptors, InternalServerErrorException, BadRequestException } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductsDto } from './dto/create-products.dto';
import { UpdateProductsDto } from './dto/update-products.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import * as csvParser from 'csv-parser';
import * as mysql from 'mysql2/promise';

@Controller( 
  {  
    version: '1',
    path: 'products'
  }
)
export class ProductsController {
  constructor(private readonly ProductsService: ProductsService) { }
//localhost:3000/api/v1/products
  @Post()
  create(@Body() createProductsDto : CreateProductsDto) {
    return this.ProductsService.create(createProductsDto);
  }

// localhost:3000/api/v1/products
  @Get()
  findAll() {
    return this.ProductsService.findAll();
  }

 
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ProductsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductsDto: UpdateProductsDto) {
    return this.ProductsService.update(+id, updateProductsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ProductsService.remove(+id);
  }

 

}
