import { Module } from '@nestjs/common';
import { Usercontroller } from './user.controller';
import { UsersStore } from './store/users.store';
import { Store } from './store/store';

@Module({
  controllers: [Usercontroller],
  // providers:[{provide: UsersStore, useClass: UsersStore}]
  // providers:[UsersStore]
  // providers:[{provide: 'STORE', useClass: UsersStore}]
  // providers:[{provide: UsersStore, useClass:Store}]
  providers:[UsersStore, {provide: Store,useExisting: UsersStore}]
})
export class AppModule {}
