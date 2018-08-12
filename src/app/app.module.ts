import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { QuestionsIndexComponent } from './questions-index/questions-index.component';
import { QuestionsViewComponent } from './questions-view/questions-view.component';
import { QuestionsNewComponent } from './questions-new/questions-new.component';
// importing accountModule into appModule
import { AccountModule } from "./account/account.module";
import { QuestionsModule } from "./questions/questions.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, FormsModule, AccountModule, QuestionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
