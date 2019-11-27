import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../shared/weather/weather.service';
import {ActualWeather} from '../shared/weather/ActualWeather';
import {log} from 'util';
import {ForecastWeather} from '../shared/weather/ForecastWeather';
import {Geolocation} from '../shared/weather/Geolocation';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit {

  actualWeatherData: ActualWeather;
  forecastWeatherDataList: ForecastWeather[] = [];
  geolocation: Geolocation;

  constructor(private weatherService: WeatherService) {
    setInterval(() => this.ngOnInit(), 3600000);
  }

  ngOnInit() {




    this.weatherService.getGeolocationByBrowser().then(pos => {
      console.log(pos.lat);
      console.log(pos.lon);

      if (pos.lat === null || pos.lon === null) {
        this.weatherService.getGeolocationBySite().subscribe(data => {
          this.geolocation = new Geolocation(data.lat, data.lon);
          this.getAllWeather();
        });
      } else {
        this.geolocation = new Geolocation(pos.lat, pos.lon);
        this.getAllWeather();
      }
    });
  }

  public getAllWeather() {
    this.weatherService.getActualWeather(this.geolocation).subscribe(item => {
      this.actualWeatherData = item;
      console.log(this.actualWeatherData.temp);
      console.log(this.actualWeatherData.icon);
      console.log(this.actualWeatherData.city);
    });

    this.weatherService.getForecastWeather(this.geolocation).subscribe(items => {
      this.forecastWeatherDataList = items;
      log(items);
    });
  }
}
