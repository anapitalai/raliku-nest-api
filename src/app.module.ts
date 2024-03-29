import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { RealEstateModule } from './realEstate/realEstate.module';
import { StationeryModule } from './stationery/stationery.module';
import { GeoModule } from './geo/geo.module';



@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI),
    SharedModule,
    AuthModule,
    ProductModule,
    OrderModule,
    RealEstateModule,
    StationeryModule,
    GeoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
