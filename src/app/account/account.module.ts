import { NgModule } from '@angular/core';

import { HomeComponent } from "../home/home.component";
import { LoginComponent } from "../login/login.component";
import { RegisterComponent } from "../register/register.component";

@NgModule({
  declarations: [HomeComponent,LoginComponent,RegisterComponent],
  exports: [HomeComponent, LoginComponent,RegisterComponent]
})
export class AccountModule {

 }
