import { Addresses } from './entities/addresses.entity';
import { UpdateAddressesDto } from './dto/update-addresses.dto';
import { CreateAddressesDto } from './dto/create-addresses.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import * as argon2 from 'argon2'
import { NotFoundException } from '@nestjs/common/exceptions';
import { DeleteResult, UpdateResult } from 'typeorm';

@Injectable()
export class AddressesService {
  constructor(@InjectRepository(Addresses)
  private addressesRepository: Repository<Addresses>) {
 
  }
  async create(createAddressesDto: CreateAddressesDto): Promise<Addresses> {
    const addresses = new Addresses();

    addresses.Name_recipient = createAddressesDto.Name_recipient;
    addresses.Line1 = createAddressesDto.Line1;
    addresses.Line2 = createAddressesDto.Line2;
    addresses.City = createAddressesDto.City;
    addresses.State = createAddressesDto.State;
    addresses.Street = createAddressesDto.Street;
    addresses.Country = createAddressesDto.Country;
    addresses.Phone = createAddressesDto.Phone;
    addresses.Pincode = createAddressesDto.Pincode;
    addresses.User_Id = createAddressesDto.User_Id;

    
    return await this.addressesRepository.save(addresses);
  }

  async findAll() {
    return await this.addressesRepository.find()
  } 
  
  async findOne(id: number) {
      return await this.addressesRepository.findOne({where: { Id: id} })
      // ถ้าไม่มีรายชื่อ ควรแสดง error ออกไป
  }



  async update(id: number, updateAddressesDto: UpdateAddressesDto):Promise<UpdateResult> {
    return await this.addressesRepository.update(id,updateAddressesDto)
  }

  async remove(id: number) :  Promise<DeleteResult> {
    return await this.addressesRepository.delete({Id:id})
}
}