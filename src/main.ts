import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import 'dotenv/config';
import * as Express from 'express';
import * as cors from 'cors';

import { AppModule } from './app.module';

/** if (process.env.NODE_ENV === 'test') {
  process.env.MONGO_URI = process.env.MONGO_URI_TEST;
  console.log('----------TESTING IN PROCESS----------');
  console.log('using database', process.env.MONGO_URI);
}

const server = Express();
server.use(cors());
server.get('/', (req, res) => res.send('ok'));
server.get('/_ah/health', (req, res) => res.send('ok'));
server.get('/_ah/start', (req, res) => res.send('ok'));**/

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
 // app.setGlobalPrefix('api');
 app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
  next();
});
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
/*
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
**/