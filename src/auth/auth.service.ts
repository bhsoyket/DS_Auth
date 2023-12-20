import { NotFoundException } from '@nestjs/common';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from './../user/user.service';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) { }
  async login(user_name: string, pass: string): Promise<any> {
    try {
      const user = await this.userService.findOneByUsername(user_name);
      if (!user) {
        throw new NotFoundException('Invalid Username Or Password!');
      }

      const passCompare = await bcrypt.compare(pass, user.password);
      if (
        !user ||
        !passCompare
      ) {
        throw new NotFoundException('Invalid Username Or Password!');
      }

      const { password, ...data } = user;
      const token = this.jwtService.sign(data);
      return { ...data, token };
    } catch (error) {
      console.error(error);
    }
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
