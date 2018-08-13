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

    if(this.CheckEmailAndPassword(this.email, this.password) == true )
    {
      this.message = "Successful Login";
    }
    else
    {
      this.message = "Invalid Login";
    }

    private CheckEmailAndPassword(email:string, password:string): boolean 
    {
      var u = JSON.parse( localStorage.users );
      var found: boolean = false;
      for(var i = 0; i< u.length; i++) 
      {
        if (u[i].email == email && u[i].password == password)
        {
          found = true;
        }
      }
      return found;
  }


}
