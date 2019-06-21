import { Module } from '@nestjs/common';
import { StationeryController } from './stationery.controller';
import { StationeryService } from './stationery.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';
import { StationerySchema } from './schema/stationery.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Stationery', schema: StationerySchema }]),
  MulterModule.register({
     dest: './stationeryImages'
   })],
  controllers: [StationeryController],
  providers: [StationeryService],
  exports:[StationeryService]
})
export class StationeryModule {}
