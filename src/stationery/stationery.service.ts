import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RegisterDTO } from '../auth/dto/register.dto';
import { LoginDTO } from '../auth/dto/login.dto';
import { Payload } from '../types/payload';
import { RealEstate } from '../types/realestate';
import { User } from 'src/types/user';
import { StationeryDTO } from './dto/stationery.dto';
import { Stationery } from 'src/types/stationery';

@Injectable()
export class StationeryService {
  constructor(@InjectModel('Stationery') private readonly stationeryModel: Model<Stationery>) { }


  async create(stationeryDTO: StationeryDTO, files) {
    const stationery_name = stationeryDTO.stationery_name;
    const propName = await this.stationeryModel.findOne({ stationery_name });
    if (propName) {
      throw new HttpException('Stationery already exists', HttpStatus.BAD_REQUEST);
    }
    //addedby sly
    const stationery_type = stationeryDTO.stationery_type;
    const price = stationeryDTO.price;
    console.log(price);
    console.log(files.length);


    var arr = [];
    for (var i = 0; i < files.length; ++i) {
      arr.push({ val: i,prop:files[i].path });
    }
    console.log(arr);
    //const imgPath = files[i].path;
    //console.log(imgPath);
    //ends here
    const createdProp = new this.stationeryModel({ stationery_name: stationery_name, stationery_type: stationery_type, price:price , images: arr });
    await createdProp.save();
    return createdProp;
  }
}
