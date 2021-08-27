import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  registeredUsers:Array<any> =[]
  reg_users(){
    console.log(this.registeredUsers)
  }
}
