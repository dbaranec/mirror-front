import {OnInit, Component} from '@angular/core';
import {QouteService} from '../shared/qoute/qoute.service';
import {QouteData} from '../shared/qoute/QouteData';
import {RssData} from '../shared/newsFeed/RssData';
import {NewsFeedService} from '../shared/newsFeed/newsFeed.service';

@Component({
  selector: 'app-qoute-data',
  templateUrl: './qoute.component.html',
  styleUrls: ['./qoute.component.css']
})

export class QouteComponent implements OnInit {

  qouteData: QouteData;
  version = '0.27v';
  rssData: RssData;

  constructor(private qouteService: QouteService, private newsFeedService: NewsFeedService) {
    setInterval(() => this.ngOnInit(), 1800000);
  }

  ngOnInit() {
    this.qouteService.getQouteData().subscribe(data => {
      console.log(data)
      this.qouteData = data;
    });

    this.newsFeedService.getNewsFeed().subscribe(news => {
      this.rssData = news;
    });
  }
}

