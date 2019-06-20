import { Controller, Get, Post, Delete, Put, Param, Body, UseInterceptors, UploadedFile, UploadedFiles } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { RegisterDTO } from 'src/auth/dto/register.dto';
import { Payload } from 'src/types/payload';
import { RealEstateService } from './realEstate.service';
import { RealEstateDTO } from './dto/realEstate.dto';

@Controller('realestate')
export class RealEstateController {
    constructor(private estateService:RealEstateService){}
    @Get()
    get() {
        return 'this works..'
    }

    @Post()
    @UseInterceptors(FilesInterceptor('images'))
    async create(@Body() estateDTO: RealEstateDTO,@UploadedFiles() files) {
        console.log(files,estateDTO.land);
        const prop= this.estateService.create(estateDTO,files);
      return prop;
    }
  
  

    @Delete('delete/:id')
    purge(@Param('id') id) {
        return `${id} was deleted`;
    }


    @Put('update/:id')
    update() {
        return 'item was update'
    }




}
