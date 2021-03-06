import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.services';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getHello(): string {
    return this.userService.getHello();
  }
  @Post()
  postHello(): string {
    return this.userService.getHello();
  }
}
