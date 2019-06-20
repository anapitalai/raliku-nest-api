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
  constructor(@InjectModel('Property') private readonly estateModel: Model<RealEstate>) { }


  async create(estateDTO: RealEstateDTO, files) {
    const name = estateDTO.name;
    const propName = await this.estateModel.findOne({ name });
    if (propName) {
      throw new HttpException('Property already exists', HttpStatus.BAD_REQUEST);
    }
    //addedby sly
    const proptype = estateDTO.proptype;
    const price = estateDTO.price;
    console.log(price);
    console.log(proptype);
    console.log(files.length);


    var arr = [];
    for (var i = 0; i < files.length; ++i) {
      arr.push({ val: i,prop:files[i].path });
    }
    console.log(arr);
    //const imgPath = files[i].path;
    //console.log(imgPath);
    //ends here
    const createdProp = new this.estateModel({ name: name, proptype: proptype, price:price , images: arr });
    await createdProp.save();
    return createdProp;
  }
}
