import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { User } from "user/entities/user.entity";
require('dotenv').config();

export const dbConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [User],
  synchronize: true,
  ssl: {
    rejectUnauthorized: false
  },
}
