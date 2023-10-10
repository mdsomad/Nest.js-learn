import { Controller , Inject} from '@nestjs/common';
import { Config } from './config';

@Controller('users')                                                  //* <-- Iska naam hai decorator             //* <-- Iska naam hai decorator
export class Usercontroller {

//  constructor(@Inject("DATABASE_NAME") private dbname: string){
//     console.log(this.dbname)
//  }
//  constructor(@Inject("MAN") private names: []){
//     console.log(this.names)
//  }
 constructor( private config:Config){
    console.log(this.config)
 }



   


}
