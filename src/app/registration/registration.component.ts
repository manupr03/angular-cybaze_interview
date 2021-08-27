import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }
  genders =["male","female"]
  
  registeredUsernames:Array<any> =['Testuser1','Testuser2']
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
   this.registeredUsernames.push(this.registerform.value)
   console.log(this.registeredUsernames)
  }

}
