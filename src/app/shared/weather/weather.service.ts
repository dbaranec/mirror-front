import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActualWeather} from './ActualWeather';
import {ForecastWeather} from './ForecastWeather';
import {Observable} from 'rxjs';

@Injectable()
export class WeatherService {

  constructor(private http: HttpClient) {
  }

  getActualWeather() {
    return this.http.get<ActualWeather>('//localhost:8080/getActualWeatherToday');
  }

  getForecastWeather(): Observable<ForecastWeather[]> {
    return this.http.get<ForecastWeather[]>('//localhost:8080/getForecastWeather');
  }
}
