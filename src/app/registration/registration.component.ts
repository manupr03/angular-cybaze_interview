import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private _services:UsersService) { }
  genders =["male","female"]
  
  // registeredUsers:Array<any> =[]
  registerform: FormGroup;

  ngOnInit(): void {
    this.registerform = new FormGroup({
      'username': new FormControl(null,Validators.required),
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'password': new FormControl(null,Validators.required),
      'gender': new FormControl('male')

    })
  }
  onRegister(){
   console.log(this.registerform.value)
   this._services.registeredUsers.push(this.registerform.value)
   this._services.reg_users()
  }

}
