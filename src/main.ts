import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.APP_PORT||3000);
  // console.log("process.env.DB_HOST",process.env.DB_HOST)
  Logger.log(`[NestApplication] Application Run on Port ${process.env.APP_PORT}`);
}
bootstrap();
