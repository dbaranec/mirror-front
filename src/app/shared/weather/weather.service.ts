import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActualWeather} from './ActualWeather';

@Injectable()
export class WeatherService {

  constructor(private http: HttpClient) {
  }

  getActualWeather() {
    return this.http.get<ActualWeather>('//localhost:8080/getActualWeatherToday');
  }
}
