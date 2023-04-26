import { Categories } from 'src/categories/entities/categories.entity';
/*
https://docs.nestjs.com/providers#services
*/
import { Products } from './entities/products.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateProductsDto } from './dto/create-products.dto';
import { UpdateProductsDto } from './dto/update-products.dto';
import { UploadProductsDto } from './dto/upload-products.dto';
import { DeleteResult, UpdateResult } from 'typeorm';
import { Repository } from 'typeorm/repository/Repository';






@Injectable()
export class ProductsService {

  constructor(@InjectRepository(Products)
  private ProductsRepository: Repository<Products>) {
 
  }
async create(createProductsDto: CreateProductsDto): Promise<Products> {
  const product = new Products();
  

  // set product properties from DTO
  product.ProductsName = createProductsDto.ProductsName;
  product.Description = createProductsDto.Description;
  product.Brand = createProductsDto.Brand;
  product.ItemGroup = createProductsDto.ItemGroup;
  product.SKU = createProductsDto.SKU;
  product.ST_Price = createProductsDto.ST_Price;
  product.SL_Price = createProductsDto.SL_Price;
  product.Stock = createProductsDto.Stock;
  product.Weight = createProductsDto.Weight;
  product.Wide = createProductsDto.Wide;
  product.Long = createProductsDto.Long;
  product.High = createProductsDto.High;
  product.Cat_Id = createProductsDto.Cat_Id;



  // save product to database
 return await this.ProductsRepository.save(product);

  // return the created product  

}


  async findAll() {
    return await this.ProductsRepository.find()
  } 
  
  async findOne(id: number) {
      return await this.ProductsRepository.findOne({where: { ProductsId: id} })
      // ถ้าไม่มีรายชื่อ ควรแสดง error ออกไป
  }



  async update(id: number, updateProductsDto: UpdateProductsDto):Promise<UpdateResult> {
    return await this.ProductsRepository.update(id,updateProductsDto)
  }

  async remove(id: number) :  Promise<DeleteResult> {
    return await this.ProductsRepository.delete({ProductsId:id})
}



}
