/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


export class CreateCategoriesDto {

  Cat_ID : number;
  titel:     string;

  constructor(partial: Partial<CreateCategoriesDto>) {
    // Use correct argument name
    Object.assign(this, partial); // Assign object properties from partial to this
  }
}
