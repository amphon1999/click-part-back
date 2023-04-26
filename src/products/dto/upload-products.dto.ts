import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, MinLength } from 'class-validator';
import { CreateProductsDto } from './create-products.dto';

export class UploadProductsDto extends PartialType(CreateProductsDto) {

  
}
