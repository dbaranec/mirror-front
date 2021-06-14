import {Component, OnInit} from '@angular/core';
import {NamedayService} from '../shared/nameday/nameday.service';
import {NameDayData} from '../shared/nameday/NameDayData';
import * as moment from 'moment';
import 'moment/min/locales';

@Component({
  selector: 'app-nameday',
  templateUrl: './nameday.component.html',
  styleUrls: ['./nameday.component.css']
})
export class NamedayComponent implements OnInit {

  namesdayData: NameDayData;
  now: number;
  weekDay: String;
  month: String;
  date: String;
  time: String;
  seconds: String;
  timePeriod: String;
  constructor(private namesdayService: NamedayService) {
    setInterval(() => {
      this.now = Date.now();
      this.weekDay = moment().locale('sk').format('dddd, ');
      this.month = moment().locale('sk').format('MMM ');
      this.date = moment().locale('sk').format('D, YYYY');
      this.time = moment().locale('sk').format('h:mm');
      this.seconds = moment().locale('sk').format('ss');
      this.timePeriod = moment().locale('sk').format('a');
    }, 1);


    setInterval(() => this.ngOnInit(), 300000);
  }

  ngOnInit() {
    this.namesdayService.getNamesDayToday().subscribe(data => {
      this.namesdayData = data;
    });
  }

}
