/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards,UploadedFile, UseInterceptors, InternalServerErrorException, BadRequestException } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import * as csvParser from 'csv-parser';
import * as mysql from 'mysql2/promise';
import { CreateAddressesDto } from './dto/create-addresses.dto';
import { UpdateAddressesDto } from './dto/update-addresses.dto';
import { AddressesService } from './addresses.service';

@Controller( 
  {  
    version: '1',
    path: 'addresses'
  }
)
export class AddressesController {
  constructor(private readonly addressesService: AddressesService) { }
//localhost:3000/api/v1/addresses
  @Post()
  create(@Body() createAddressesDto: CreateAddressesDto) {
    return this.addressesService.create(createAddressesDto);
  }

// localhost:3000/api/v1/addresses
@Get()
  findAll() {
    return this.addressesService.findAll();
  }

 
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.addressesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAddressesDto: UpdateAddressesDto) {
    return this.addressesService.update(+id, updateAddressesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.addressesService.remove(+id);
  }

 

}
