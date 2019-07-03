import { Module } from '@nestjs/common';
import { GeoService } from './geo.service';
import { GeoController } from './geo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RealEstateSchema } from 'src/realEstate/schema/realEstate.schema';
import {Geoschema} from '../geo/schema/geo.schema';
@Module({
  imports: [MongooseModule.forFeature([{ name: 'Geo', schema: Geoschema }])],
  providers: [GeoService],
  controllers: [GeoController]
})
export class GeoModule {}
