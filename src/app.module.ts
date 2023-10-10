import { Module } from '@nestjs/common';
import { Usercontroller } from './user.controller';
import { Config } from './config';

@Module({
  controllers: [Usercontroller],
  providers:[
    {provide: "DATABASE_NAME",useValue:"SON_NIGHT"},
    {provide: "MAN",useValue:["Md Somad", "Amir"]},
    {provide: Config,useValue:{
      type:'DEV',
      note:"18"
    }},
  ]

})
export class AppModule {}
