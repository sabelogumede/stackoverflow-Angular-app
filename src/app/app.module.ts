import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from "@angular/router"


import { AppComponent } from './app.component';
// importing accountModule into appModule
import { AccountModule } from "./account/account.module";
import { QuestionsModule } from "./questions/questions.module";
// routes import use
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { QuestionsIndexComponent } from './questions-index/questions-index.component';
import { QuestionsViewComponent } from './questions-view/questions-view.component';
import { QuestionsNewComponent } from './questions-new/questions-new.component';

var myroutes: Routes = [
  { path:"home",component:HomeComponent},
  { path:"login",component:LoginComponent},
  { path:"register",component:RegisterComponent},
  { path:"questions",component:QuestionsIndexComponent},
  { path:"newquestion",component:QuestionsNewComponent},
  { path:"viewquestion",component:QuestionsViewComponent}
];

var myroutes2 = RouterModule.forRoot(myroutes);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, FormsModule, AccountModule, QuestionsModule, myroutes2
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
