import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { TopicComponent } from './topic.component';
import { AppComponent } from './app.component';
import { Mensuration } from './topics/mensuration/mensuration';
const routes: Routes = [
  { path: '', redirectTo: '/topic', pathMatch: 'full' },
  { path: 'topic',  component: TopicComponent },
  { path: 'mensuration',  component: Mensuration }
];

@NgModule({
  declarations: [
    TopicComponent, Mensuration,AppComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  exports: [ RouterModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
