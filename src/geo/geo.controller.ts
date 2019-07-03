import { Controller,Get,Post,Query,Body, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { GeoDTO } from './schema/dto/geo.dto';
import { GeoService } from './geo.service';
import { Geo } from 'src/types/geo';
import { FilesInterceptor } from '@nestjs/platform-express';
import { RealEstateDTO } from 'dist/realEstate/dto/realEstate.dto';

@Controller('geo')
export class GeoController {
    constructor(private geoService: GeoService) { }
 
    @Get('filter')
    getEstates() {
      
         return this.geoService.getGeo();
    }

    @Post()
    async create(@Body() geoDTO: GeoDTO) {    
        const prop = this.geoService.create(geoDTO);
        return prop;
    }
}

