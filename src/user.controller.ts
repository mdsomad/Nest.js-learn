import {
  Controller,
  Post,
  Body
} from '@nestjs/common';




@Controller('users') //* <-- Iska naam hai decorator
export class Usercontroller {
  @Post('/video')
  addVideo(@Body() requestData:Record<string,any>) {
    console.log(requestData);
    return {
      success:true
    };
  }

  
  


}






