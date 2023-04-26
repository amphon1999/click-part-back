/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, MinLength } from 'class-validator';
import { CreateAddressesDto } from './create-addresses.dto';

export class UpdateAddressesDto extends PartialType(CreateAddressesDto) {
   

Name_recipient :      string;
Line1:      string;
Line2:      string; 
City:       string; 
State:      string;
Street:     string;  
Country:    string; 
Phone:      string; 
Pincode:    string; 
User_Id:    string; 

}