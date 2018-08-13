import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 
  email: string;
  personname: string;
  password: string;
  mobile: number;
  age: number;
  message: string;

  constructor() { }

  ngOnInit() {
  }

  onRegisterClick(){
    console.log("register button cliked!");
  }

}
