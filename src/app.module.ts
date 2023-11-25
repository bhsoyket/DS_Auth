import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { envConfig } from 'config/env.config';
import { dbConfig } from 'config/db.config';
@Module({
  imports: [
    ConfigModule.forRoot(envConfig),
    TypeOrmModule.forRoot(dbConfig),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
