/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
export class CreateProductsDto {
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

    

  constructor(partial: Partial<CreateProductsDto>) {
    // Use correct argument name
    Object.assign(this, partial); // Assign object properties from partial to this
  }
}
