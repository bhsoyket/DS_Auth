import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }
  create(user: CreateUserDto): Promise<User> {
    console.log("🚀 ~ file: user.service.ts:15 ~ UserService ~ create ~ user:", user)
    const newuser = this.userRepository.create(user);
    return this.userRepository.save(newuser);
  }

  findAll() {
    return this.userRepository.find();
  }

  async findOneByUsername(user_name: string): Promise<User> {
    return this.userRepository.findOne(
      { where: [{ user_name }, { email: user_name }] }
    )
  }

  async findOne(id: number): Promise<User> {
    return this.userRepository.findOneBy({
      user_id: id
    })
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.find({});
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
