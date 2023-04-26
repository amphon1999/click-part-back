/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, MinLength } from 'class-validator';
import { CreateProductsDto } from './create-products.dto';

export class UpdateProductsDto extends PartialType(CreateProductsDto) {
   
    ProductsName  : string;
    Description   : string;
    Brand         : string;
    ItemGroup     : string;
    SKU           : string;
    ST_Price      : number;
    SL_Price      : number;
    Stock         : number;
    Weight        : number;
    Wide          : number;
    Long          : number;
    High          : number;
    Cat_Id        : number;
}
