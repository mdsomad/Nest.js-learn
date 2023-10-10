import { Controller ,Get,Optional,Inject} from '@nestjs/common';
import { UsersStore } from './store/users.store';
import { Store } from './store/store';

@Controller('users')                                                  //* <-- Iska naam hai decorator             //* <-- Iska naam hai decorator
export class Usercontroller {
//  constructor(private store:UsersStore){
//   console.log(this.store);
//  }

//  constructor(@Optional() private store:UsersStore){
//   console.log(this.store);
//  }

 constructor( private store:Store){
  console.log(this.store);
 }






}
