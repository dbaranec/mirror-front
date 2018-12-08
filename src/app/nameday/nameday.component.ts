import {Component, OnInit} from '@angular/core';
import {NamedayService} from '../shared/nameday/nameday.service';
import {NameDayData} from '../shared/nameday/NameDayData';

@Component({
  selector: 'app-nameday',
  templateUrl: './nameday.component.html',
  styleUrls: ['./nameday.component.css']
})
export class NamedayComponent implements OnInit {

  private namesdayData: NameDayData;

  constructor(private namesdayService: NamedayService) { }

  ngOnInit() {
    this.namesdayService.getNamesDayToday().subscribe(data => {
      this.namesdayData = data;
    });
  }

}
