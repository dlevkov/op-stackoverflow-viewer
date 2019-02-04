import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { QuestionsListViewComponent } from './components/questions-list-view/questions-list-view.component';
import { QuestionPageViewComponent } from './components/question-page-view/question-page-view.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    QuestionsListViewComponent,
    QuestionPageViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
