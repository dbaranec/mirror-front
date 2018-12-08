import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../shared/weather/weather.service';
import {ActualWeather} from '../shared/weather/ActualWeather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit {

  actualWeatherData: ActualWeather;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.getActualWeather().subscribe(data => {
      this.actualWeatherData = data;
    });
  }
}
