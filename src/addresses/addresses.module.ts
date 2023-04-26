import { TypeOrmModule } from '@nestjs/typeorm';
import { Addresses } from './entities/addresses.entity';
import { AddressesController } from './addresses.controller';
import { AddressesService } from './addresses.service';

/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([Addresses])],
  controllers: [AddressesController],
  providers: [AddressesService],
})
export class AddressesModule {}
