import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  signupform: FormGroup;
  ngOnInit(): void {
    this.signupform = new FormGroup({
      'username': new FormControl(''),
      'email': new FormControl('')

    })
    }

    onLogin(){
      console.log(this.signupform.value)
    }

}
