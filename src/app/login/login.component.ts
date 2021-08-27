import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import {UsersService} from '../services/users.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _services:UsersService) { }
  signupform: FormGroup;
  loginUser:Array<any>=[]
  username : string
  ngOnInit(): void {
    this.signupform = new FormGroup({
      'username': new FormControl(null,Validators.required),
      'password': new FormControl(null,Validators.required)

    })
    }

    onLogin(){

    }

}
