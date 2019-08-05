import { Module } from '@nestjs/common';
import { RealEstateService } from './realEstate.service';
import { RealEstateController } from './realEstate.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RealEstateSchema } from './schema/realEstate.schema';
import { MulterModule } from '@nestjs/platform-express';


@Module({
  imports: [MongooseModule.forFeature([{ name: 'RealEstate', schema: RealEstateSchema }]),
 MulterModule.register({
    dest: './realestates'
  })],
  providers: [RealEstateService],
  exports:[RealEstateService],
  controllers: [RealEstateController],
 
})
export class RealEstateModule {}
