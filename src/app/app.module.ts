import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {AuthServiceService} from './services/auth-service.service';
import {FormsServiceService} from './services/forms-service.service';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    AuthServiceService,
    FormsServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
