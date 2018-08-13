import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from "../home/home.component";
import { LoginComponent } from "../login/login.component";
import { RegisterComponent } from "../register/register.component";

@NgModule({
  declarations: [HomeComponent,LoginComponent,RegisterComponent],
  exports: [HomeComponent, LoginComponent,RegisterComponent],
  imports: [FormsModule]
})
export class AccountModule {

 }
