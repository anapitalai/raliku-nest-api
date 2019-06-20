import { Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';

import { UserSchema } from './schema/user.schema';
import { HttpExceptionFilter } from './http-exception.filter';
import { LoggingInterceptor } from './logging.interceptor';
import { UserService } from './user.service';
import { MulterModule } from '@nestjs/platform-express';
import { RealEstateModule } from 'src/realEstate/realEstate.module';
import { RealEstateSchema } from 'src/realEstate/schema/realEstate.schema';
import { RealEstateService } from 'src/realEstate/realEstate.service';

@Module({
  imports: [MongooseModule.forFeature([{name: 'User', schema: UserSchema}])],
  providers: [
    UserService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    }],
  exports: [UserService],
})
export class SharedModule {}
