import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }
  genders =["male","female"]
  registerform: FormGroup;

  ngOnInit(): void {
    this.registerform = new FormGroup({
      'username': new FormControl(''),
      'email': new FormControl(''),
      'password': new FormControl(''),
      'gender': new FormControl('')

    })
  }
  onRegister(){
   console.log(this.registerform.value)
  }

}
