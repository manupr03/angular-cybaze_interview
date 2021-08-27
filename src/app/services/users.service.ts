import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  registeredUsers:Array<any> =[]
  //registring users to array
  reg_users(){
    console.log(this.registeredUsers)
  }

  //finding users from array
  find_users(){
    
  }
}
