import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActualWeather} from './ActualWeather';
import {ForecastWeather} from './ForecastWeather';
import {Geolocation} from './Geolocation';
import {Observable} from 'rxjs';

@Injectable()
export class WeatherService {

  constructor(private http: HttpClient) {
  }

  getActualWeather(geolocation: Geolocation) {
    return this.http.post<ActualWeather>('//dore-java.herokuapp.com/getActualWeatherToday', geolocation);
  }

  getForecastWeather(geolocation: Geolocation): Observable<ForecastWeather[]> {
    return this.http.post<ForecastWeather[]>('//dore-java.herokuapp.com/getForecastWeather', geolocation);
  }

  getGeolocationBySite() {
    return this.http.get<Geolocation>('http://www.ip-api.com/json');
  }

  getGeolocationByBrowser(): Promise<Geolocation> {
    return new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition(resp => {
          resolve(new Geolocation(resp.coords.latitude.toString(), resp.coords.longitude.toString()));
        },
        err => {
          resolve(new Geolocation(null, null));
        });
    });

  }
}
