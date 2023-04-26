import { CategoriesService } from './categories.service';
import { CreateCategoriesDto } from './dto/create-categories.dto';
import { UpdateCategoriesDto } from './dto/update-categories.dto';
import { MinLength } from 'class-validator';
/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards,UploadedFile, UseInterceptors, InternalServerErrorException, BadRequestException } from '@nestjs/common';

import { FileInterceptor } from '@nestjs/platform-express';
import * as csvParser from 'csv-parser';
import * as mysql from 'mysql2/promise';

@Controller( 
  {  
    version: '1',
    path: 'categories'
  }
)
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) { }
//localhost:3000/api/v1/categories
  @Post()
  create(@Body() createCategoriesDto: CreateCategoriesDto) {
    return this.categoriesService.create(createCategoriesDto);
  }

// localhost:3000/api/v1/categories
@Get()
  findAll() {
    return this.categoriesService.findAll();
  }

 
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoriesDto: UpdateCategoriesDto) {
    return this.categoriesService.update(+id, updateCategoriesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriesService.remove(+id);
  }

 

}
