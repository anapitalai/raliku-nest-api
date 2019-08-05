import { Controller, Query,Get, Post, Delete, Put, Param, Body, UseInterceptors, UploadedFile, UploadedFiles, UseGuards } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { RegisterDTO } from 'src/auth/dto/register.dto';
import { Payload } from 'src/types/payload';
import { RealEstateService } from './realEstate.service';
import { RealEstateDTO } from './dto/realEstate.dto';
//import { RolesGuard } from 'src/guards/auth.guard';
import { RealEstate } from 'src/types/realestate';





@Controller('realestate')
export class RealEstateController {
    constructor(private estateService: RealEstateService) { }
    @Get()
    get():Promise<RealEstate[]> {
        return this.estateService.get();
    }

    @Get('filter')
    getEstates(@Query() qlng,qlat):Promise<RealEstate[]> {
       
  
        return this.estateService.getEstates(qlng,qlat);
    }

    @Post()
 
    @UseInterceptors(FilesInterceptor('images'))
    async create(@Body() estateDTO: RealEstateDTO, @UploadedFiles() files) {
        console.log(files, estateDTO.price);
        const prop = this.estateService.create(estateDTO, files);
        return prop;
    }
    
    @Put(':id')
    //@UseInterceptors(FileInterceptor('images'))
    async update(@Param('id') id,@Body() estate:RealEstate):Promise<RealEstate>{
    console.log(estate);
    return this.estateService.update(id,estate);
  }


    @Delete(':id')
    purge(@Param('id') id):Promise<RealEstate> {
        return this.estateService.delete(id);
    }


  



}
