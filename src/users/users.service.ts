import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: '123',
      password: '1234',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }

  async createUser(
    username: string,
    password: string,
  ): Promise<User | undefined> {
    const newUser: User = {
      userId: new Date().getMilliseconds(),
      username,
      password,
    };
    this.users.push(newUser);
    return newUser;
  }
}
