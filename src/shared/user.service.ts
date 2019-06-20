import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcryptjs';
import { Model } from 'mongoose';
import { RegisterDTO } from '../auth/dto/register.dto';
import { LoginDTO} from '../auth/dto/login.dto';
import { Payload } from '../types/payload';
import { User } from '../types/user';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async create(userDTO: RegisterDTO,file) {
    const { username } = userDTO;
    console.log(username);
    const user = await this.userModel.findOne({ username });
    if (user) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }
    //addedby sly
    const password = userDTO.password;
    console.log(password);
    const imgPath = file.path;
    console.log(imgPath);
    //ends here
    const createdUser = new this.userModel({username:username,password:password,image:imgPath});
    await createdUser.save();
    return this.sanitizeUser(createdUser);
  }

  async find() {
    return await this.userModel.find();
  }

  async findByLogin(userDTO: LoginDTO) {
    const { username, password } = userDTO;
    const user = await this.userModel
      .findOne({ username })
      .select('username password seller created address');
    if (!user) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }

    if (await bcrypt.compare(password, user.password)) {
      return this.sanitizeUser(user);
    } else {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }
  }

  async findByPayload(payload: Payload) {
    const { username } = payload;
    return await this.userModel.findOne({ username });
  }

  sanitizeUser(user: User) {
    const sanitized = user.toObject();
    delete sanitized['password'];
    return sanitized;
    // return user.depopulate('password');
  }

  async update(id:string,user:RegisterDTO,file){
    console.log(file.path);
    const username = user.username;
    const imagePath = file.path;
    const password = user.password;
    console.log(password,'update password');
    const imgPath = file.path;
    console.log(imgPath,'update path');
       
    return await this.userModel.findByIdAndUpdate(id,{username,image:imgPath},{new:true});
    


}

}
