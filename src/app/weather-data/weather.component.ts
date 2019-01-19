import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../shared/weather/weather.service';
import {ActualWeather} from '../shared/weather/ActualWeather';
import {log} from 'util';
import {ForecastWeather} from '../shared/weather/ForecastWeather';
import {forEach} from '@angular/router/src/utils/collection';
import index from '@angular/cli/lib/cli';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit {

  actualWeatherData: ActualWeather;
  forecastWeatherDataList: ForecastWeather[] = [];

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit() {
    this.weatherService.getActualWeather().subscribe(data => {
      this.actualWeatherData = data;
    });

    this.weatherService.getForecastWeather().subscribe(items => {
      this.forecastWeatherDataList = items;
      log(items);
    });
  }
}
