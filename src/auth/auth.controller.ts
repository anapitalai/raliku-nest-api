import { Body, Controller, Post, Get, UploadedFile, UseInterceptors, Put, Param } from '@nestjs/common';
import { UserService } from '../shared/user.service';
import { Payload } from '../types/payload';
import { RegisterDTO } from '../auth/dto/register.dto';
import { LoginDTO} from '../auth/dto/login.dto';
import { AuthService } from './auth.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { User } from 'src/types/user';

@Controller('auth')
export class AuthController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  @Post('login')
  async login(@Body() userDTO: LoginDTO) {
    const user = await this.userService.findByLogin(userDTO);
    const payload: Payload = {
      username: user.username,
      seller: user.seller,
    };
    const token = await this.authService.signPayload(payload);
    return { user, token };
  }

  @Post('register')
  @UseInterceptors(FileInterceptor('image'))
  async register(@Body() userDTO: RegisterDTO,@UploadedFile('file') file) {
    const user = await this.userService.create(userDTO,file);
    const payload: Payload = {
      username: user.username,
      image: user.image,
      seller: user.seller,

    };
    const token = await this.authService.signPayload(payload);
    return { user, token };
  }


  @Put('update/:id')
  @UseInterceptors(FileInterceptor('image'))
  async update(@Param('id') id,@Body() registerDTO:RegisterDTO,@UploadedFile('file') file){
    console.log(file.path,'from update endpoint from controller');
    const imagePath = file.path;
    const {image} = registerDTO;
  
  return this.userService.update(id,registerDTO,file);
}


}

//return await this.userModel.findByIdAndUpdate(id,{image:imagePath},{new: true});
