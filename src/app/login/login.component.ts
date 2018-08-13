import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string;
  password: string;
  message: string;

  constructor() { 
    console.log("constructor of login");
  }

  onLoginClick()
  {

    if(this.email == "admin@gmail.com" && this.password == "manager")
    {
      this.message = "Successful Login";
    }
    else
    {
      this.message = "Invalid Login";
    }

  }



}
