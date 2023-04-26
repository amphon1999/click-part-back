import { CreateCategoriesDto } from './dto/create-categories.dto';
import { UpdateCategoriesDto } from './dto/update-categories.dto';
import { Categories } from './entities/categories.entity';
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';

import * as argon2 from 'argon2'
import { NotFoundException } from '@nestjs/common/exceptions';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CreateProductsDto } from 'src/products/dto/create-products.dto';


@Injectable()
export class CategoriesService {
  constructor(@InjectRepository(Categories)
  private categoriesRepository: Repository<Categories>) {
 
  }
  async create(createCategoriesDto: CreateCategoriesDto): Promise<Categories> {
    const categories = new Categories();
    // categories.Cat_Id = CreateProductsDto.Cat_Id;
    categories.titel = createCategoriesDto.titel;

    
    return await this.categoriesRepository.save(categories);
  }

  async findAll() {
    return await this.categoriesRepository.find()
  } 
  
  async findOne(id: number) {
      return await this.categoriesRepository.findOne({where: { Cat_ID: id} })
      // ถ้าไม่มีรายชื่อ ควรแสดง error ออกไป
  }



  async update(id: number, updateCategoriesDto: UpdateCategoriesDto):Promise<UpdateResult> {
    return await this.categoriesRepository.update(id,updateCategoriesDto)
  }

  async remove(id: number) :  Promise<DeleteResult> {
    return await this.categoriesRepository.delete({Cat_ID:id})
}
}