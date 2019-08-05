import { Controller, Get, Post, Delete, Put, Param, Body, UseInterceptors, UploadedFile, UploadedFiles, UseGuards } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { RegisterDTO } from 'src/auth/dto/register.dto';
import { Payload } from 'src/types/payload';

//import { RolesGuard } from 'src/guards/auth.guard';
import { StationeryService } from './stationery.service';
import { RealEstateDTO } from 'src/realEstate/dto/realEstate.dto';
import { StationeryDTO } from './dto/stationery.dto';


@Controller('stationery')
export class StationeryController {
    constructor(private stationeryService: StationeryService) { }
    @Get()
    get() {
        return this.stationeryService.get();
    }

    @Post()
    //@UseGuards(RolesGuard)
    @UseInterceptors(FilesInterceptor('images'))
    async create(@Body() estateDTO: StationeryDTO, @UploadedFiles() files) {
        console.log(files, estateDTO.price);
        const prop = this.stationeryService.create(estateDTO, files);
        return prop;
    }


    @Delete(':id')
    purge(@Param('id') id) {
        return this.stationeryService.delete(id);
    }


    @Put('update/:id')
    update() {
        return 'item was update'
    }




}
