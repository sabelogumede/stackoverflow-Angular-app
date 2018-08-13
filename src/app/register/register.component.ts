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
  mobile: string;
  dateofbirth: number;
  monthofbirth: number;
  yearofbirth: number;
  receivenewsletters: boolean;
  gender: string;
  country: string;
  amount: number;
  message: string;

  onRegisterClick(){
    var s = "Email:"+ this.email + ",Person name:" + this.personname + ",Password:" 
    + this.password + ",Mobile:" +this.mobile +",Date of Birth:" +
     this.dateofbirth + ",Month of Birth:" + this.monthofbirth + 
     ",Year of Birth:" + this.yearofbirth + ",Receive news letters:" +
      this.receivenewsletters + ",Gender:" + this.gender + ",Country:" 
      + this.country + ",Amount:" + this.amount;

    console.log(s);

    // store data into local storage
    if(localStorage.users == null || localStorage.users == undefined){
      localStorage.users = JSON.stringify([]);
    }
    var u = JSON.parse(localStorage.users);
    u.push({ email: this.email,personname: this.personname ,password: this.password ,Mobile: this.mobile 
      ,dateofbirth: this.dateofbirth, monthofbirth: this.monthofbirth, yearofbirth: this.yearofbirth
      ,receivenewsletters: this.receivenewsletters ,gender: this.gender ,country: this.country
      ,amount:this.amount });
      localStorage.users = JSON.stringify(u);
      this.message = "Successfully Registered";

  }


}
