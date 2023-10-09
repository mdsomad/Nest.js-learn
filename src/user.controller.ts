import {
  Controller,
  Post,
  Get,
  HttpCode,
  HttpStatus,
  Req,
  Res,
  Header,
  Redirect
} from '@nestjs/common';
import { Request, Response } from 'express';

// @Controller('users') //* <-- Iska naam hai decorator
// export class Usercontroller {
//   @Post('profile')
//   // @HttpCode(200)
//   @HttpCode(HttpStatus.ACCEPTED)
//   getProfile(@Req() req: Request, @Res({ passthrough: true }) resp: Response) {

//     resp.status(200)
//     return {
//       Hello: ' Somad',
//     };
//   }
// }






//TODO: Set Header
@Controller('users') //* <-- Iska naam hai decorator
export class Usercontroller {
  @Post('profile')
  // @Header('Cache-Control',"none")
  // @Header('X-Name',"somad"),
  @Redirect('/users/account',302)       //* <-- Static Route Use This Method  
  getProfile(@Req() req: Request) {

    //* Dynamically switch Route Use This method
    const rn = (Math.random()* 10 + 1);

    console.log(rn)
    
    if(rn < 5 ){
      return {
        url: '/users/account',
        statusCode:302
      }
    }else{
      return {
        url: '/users/wallet',
        statusCode:302
      }
    }
    
    
  }




  @Get('/account')
  redirectRoute(){
    console.log('Working account called')
     return "Working account";
  }

  @Get('/wallet')
  redirectWallet(){
    console.log('Working wallet called')
     return "Working wallet";
  }
}
