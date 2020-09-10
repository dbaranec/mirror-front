import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../shared/weather/weather.service';
import {ActualWeather} from '../shared/weather/ActualWeather';
import {log} from 'util';
import {ForecastWeather} from '../shared/weather/ForecastWeather';
import {Geolocation} from '../shared/weather/Geolocation';

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
    setInterval(() => this.ngOnInit(), 900000);
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
      this.actualWeatherData.windSpeed = Math.round(item.windSpeed);
      this.actualWeatherData.icon = this.findWeatherIconClass(item.icon);
      console.log('Smer vetra ' + item.windDirection);
      this.actualWeatherData.windDirection = this.findWeatherWindDirectionIconClass(parseInt(item.windDirection, 10));
      console.log('Smer vetra ' + this.actualWeatherData.windDirection);
      console.log(this.actualWeatherData.windSpeed);
    });

    this.weatherService.getForecastWeather(this.geolocation).subscribe(items => {
      items.forEach(value => value.icon = this.findWeatherIconClass(value.icon));
      this.forecastWeatherDataList = items;
      this.forecastWeatherDataList = items.slice(0, 5);
      log(this.forecastWeatherDataList);
    });
  }

  private findWeatherIconClass(icon: String): string {
    switch (icon) {
      case '01d': {
        return 'wi-day-sunny';
        break;
      }
      case '02d': {
        return 'wi-day-cloudy';
        break;
      }
      case '03d': {
        return 'wi-cloudy';
        break;
      }
      case '04d': {
        return 'wi-cloudy-windy';
        break;
      }
      case '09d': {
        return 'wi-showers';
        break;
      }
      case '10d': {
        return 'wi-rain';
        break;
      }
      case '11d': {
        return 'wi-thunderstorm';
        break;
      }
      case '13d': {
        return 'wi-snow';
        break;
      }
      case '50d': {
        return 'wi-fog';
        break;
      }
      case '01n': {
        return 'wi-night-clear';
        break;
      }
      case '02n': {
        return 'wi-night-cloudy';
        break;
      }
      case '03n': {
        return 'wi-night-cloudy';
        break;
      }
      case '04n': {
        return 'wi-night-cloudy';
        break;
      }
      case '09n': {
        return 'wi-night-showers';
        break;
      }
      case '10n': {
        return 'wi-night-rain';
        break;
      }
      case '11n': {
        return 'wi-night-thunderstorm';
        break;
      }
      case '13n': {
        return 'wi-night-snow';
        break;
      }
      case '50n': {
        return 'wi-night-alt-cloudy-windy';
        break;
      }
      default: {
        return 'wi-night-alt-cloudy-windy';
        break;
      }
    }
  }

  private findWeatherWindDirectionIconClass(degree: number) {

    if (degree > 337.5) {
      return 'wi-towards-n';
    }
    if (degree > 292.5) {
      return 'wi-towards-nw';
    }
    if (degree > 247.5) {
      return 'wi-towards-w';
    }
    if (degree > 202.5) {
      return 'wi-towards-sw';
    }
    if (degree > 157.5) {
      return 'wi-towards-s';
    }
    if (degree > 122.5) {
      return 'wi-towards-se';
    }
    if (degree > 67.5) {
      return 'wi-towards-e';
    }
    if (degree > 22.5) {
      return 'wi-towards-ne';
    }
    return 'wi-towards-n';
  }

}
