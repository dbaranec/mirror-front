import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {QouteService} from './shared/qoute/qoute.service';
import { QouteComponent } from './qoute-data/qoute.component';


@NgModule({
  declarations: [
    AppComponent,
    QouteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [QouteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
