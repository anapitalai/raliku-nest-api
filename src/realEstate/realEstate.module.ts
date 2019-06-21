import { Module } from '@nestjs/common';
import { RealEstateService } from './realEstate.service';
import { RealEstateController } from './realEstate.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RealEstateSchema } from './schema/realEstate.schema';
import { MulterModule } from '@nestjs/platform-express';


@Module({
  imports: [MongooseModule.forFeature([{ name: 'Property', schema: RealEstateSchema }]),
 MulterModule.register({
    dest: './propertyImages'
  })],
  providers: [RealEstateService],
  exports:[RealEstateService],
  controllers: [RealEstateController],
 
})
export class RealEstateModule {}
