import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

describe('UserService', () => {
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, {
        provide: getRepositoryToken(User),
        useClass: Repository,
      },],
    }).compile();

    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(userService).toBeDefined();
  });

  // it('should be find a user', async () => {
  //   const testUser = {
  //     "user_id": 4,
  //     "first_name": "ruhul",
  //     "last_name": "amin",
  //     "user_name": "admin",
  //     "phone": "0169875893",
  //     "date_of_birth": null,
  //     "address": null,
  //     "status": null,
  //     "email": null
  //   }
  //   const user = await userService.findOneByUsername('admin');
  //   console.log("🚀 ~ file: user.service.spec.ts:38 ~ it ~ user:", user)
  //   expect(user).toEqual(testUser);
  //   expect(user.user_name).toEqual('admin');
  // });

  it('should be find a user', async () => {
    const testUser = {
      "user_id": 4,
      "first_name": "ruhul",
      "last_name": "amin",
      "user_name": "admin",
      "phone": "0169875893",
      "date_of_birth": null,
      "address": null,
      "status": null,
      "email": null
    }
    const user = await userService.findOne(4);
    console.log("🚀 ~ file: user.service.spec.ts:38 ~ it ~ user:", user)
    expect(user).toEqual(testUser);
    expect(user.user_name).toEqual('admin');
  });
});
