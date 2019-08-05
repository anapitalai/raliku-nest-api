import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RegisterDTO } from '../auth/dto/register.dto';
import { LoginDTO } from '../auth/dto/login.dto';
import { Payload } from '../types/payload';
import { RealEstate } from '../types/realestate';
import { User } from 'src/types/user';
import { RealEstateDTO } from './dto/realEstate.dto';

@Injectable()
export class RealEstateService {
  constructor(@InjectModel('RealEstate') private readonly estateModel: Model<RealEstate>) { }
  
  async get():Promise<RealEstate[]>{
    return await this.estateModel.find();
  }
   
  async getEstates(lng,lat):Promise<RealEstate[]>{
    //lng = estateDTO.location.coordinates.lng;
    //lat = estateDTO.location.coordinates.lat;

    return await this.estateModel.aggregate([ { $geoNear: { near: {type:'Point',coordinates:[parseFloat(lng), parseFloat(lat)]}, distanceField: "dist.calculated", maxDistance: 100000, spherical: true } } ]);
  }


  async create(estateDTO: RealEstateDTO, files) {
    const name = estateDTO.name;
    const propName = await this.estateModel.findOne({ name });
    if (propName) {
      throw new HttpException('Property already exists', HttpStatus.BAD_REQUEST);
    }
    //addedby sly
    const type = estateDTO.type;
    const price = estateDTO.price;
    //const geometry=estateDTO.geometry;
    console.log(price);
    console.log(type);
    console.log(files.length);
    //console.log(geometry);


    var arr = [];
    for (var i = 0; i < files.length; ++i) {
      arr.push({ val: i,prop:files[i].path });
    }
    console.log(arr);



    const createdProp = new this.estateModel({ name: name, type: type, price:price , images: arr });
    await createdProp.save();
    return createdProp;
  }
  

  async update(id:string,realEstate:RealEstate):Promise<RealEstate>{
   return await this.estateModel.findByIdAndUpdate(id,realEstate,{new:true});
}

  async delete(id:string):Promise<RealEstate>{
    return await this.estateModel.findByIdAndRemove(id);
  }

}
