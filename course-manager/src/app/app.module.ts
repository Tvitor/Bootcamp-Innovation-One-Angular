import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {RouterModule} from '@angular/router';

import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { StarComponent } from './star/star.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { error404Component } from './404/error-404.component';
@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
      {
        path: 'courses',  component: CourseListComponent
      },
      {
        path: '**', component: error404Component
      }
    ])

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
