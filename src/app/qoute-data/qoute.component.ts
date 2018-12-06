import {QouteService} from '../shared/qoute/qoute.service';
import {OnInit, Component} from '@angular/core';
import {QouteData} from '../shared/qoute/QouteData';

@Component({
  selector: 'app-qoute-data',
  templateUrl: './qoute.component.html',
  styleUrls: ['./qoute.component.css']
})

export class QouteComponent implements OnInit {

  qouteData: QouteData;

  constructor(private qouteService: QouteService) { }

  ngOnInit() {
    this.qouteService.getQouteData().subscribe(data => {
      this.qouteData = data;
    });
  }
}

