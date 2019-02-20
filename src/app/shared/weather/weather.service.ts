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
    return this.http.get<ActualWeather>('//dore-java.herokuapp.com/getActualWeatherToday');
  }

  getForecastWeather(): Observable<ForecastWeather[]> {
    return this.http.get<ForecastWeather[]>('//dore-java.herokuapp.com/getForecastWeather');
  }
}
