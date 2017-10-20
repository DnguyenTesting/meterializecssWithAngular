import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { RouterModule } from '@angular/router';
import { TestComponent } from './components/test/test.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path:'about', component:AboutComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
