/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


export class CreateAddressesDto {

Name_recipient :      string;
Line1:                string;
Line2:                string; 
City:                 string; 
State:                string;
Street:               string;  
Country:              string; 
Phone:                string; 
Pincode:              string; 
User_Id:              string; 

  constructor(partial: Partial<CreateAddressesDto>) {
    // Use correct argument name
    Object.assign(this, partial); // Assign object properties from partial to this
  }
}
