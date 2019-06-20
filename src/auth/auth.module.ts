import { Module } from '@nestjs/common';

import { SharedModule } from '../shared/shared.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { MulterModule } from '@nestjs/platform-express';
import { RealEstateService } from 'src/realEstate/realEstate.service';

@Module({
  imports: [SharedModule ,MulterModule.register({
    dest: './uploads'
  })],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
