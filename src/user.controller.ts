import { Controller, Get, Post, Put, Delete, Patch, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('users')               //* <-- Iska naam hai decorator
export class Usercontroller {
  @Get('profile')
  getProfile(@Req() req: Request) {
    console.log(req);

    return {
      Hello: ' Somad',
    };
  }
}
