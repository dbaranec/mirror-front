import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {QouteService} from './shared/qoute/qoute.service';
import { QouteComponent } from './qoute-data/qoute.component';
import { WeatherComponent } from './weather-data/weather.component';
import {WeatherService} from './shared/weather/weather.service';
import { NamedayComponent } from './nameday/nameday.component';
import {NamedayService} from './shared/nameday/nameday.service';


@NgModule({
  declarations: [
    AppComponent,
    QouteComponent,
    WeatherComponent,
    NamedayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [QouteService, WeatherService, NamedayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
