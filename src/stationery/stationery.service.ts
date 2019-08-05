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
import { stringify } from 'querystring';

@Injectable()
export class StationeryService {
  constructor(@InjectModel('Stationery') private readonly stationeryModel: Model<Stationery>) { }

  async get():Promise<Stationery[]>{
    return await this.stationeryModel.find();
  }

  async create(stationeryDTO: StationeryDTO, files) {
    const name = stationeryDTO.name;
    const propName = await this.stationeryModel.findOne({ name:name });
    if (propName) {
      throw new HttpException('Stationery already exists', HttpStatus.BAD_REQUEST);
    }
    //addedby sly
    const type = stationeryDTO.type;
    const price = stationeryDTO.price;
    console.log(price);
    console.log(files.length);

    const arr = [];
  
    //let arr2 = <Array<string>>arr;

        for (var i = 0; i < files.length; ++i) {
          
      arr.push({ prop:files[i].path });
    }
    console.log(arr);

    const createdProp = new this.stationeryModel({ name: name, type: type, price:price , images: arr });
    await createdProp.save();
    return createdProp;
  }

  async delete(id:string):Promise<Stationery>{
    return await this.stationeryModel.findByIdAndRemove(id);
  }
}
