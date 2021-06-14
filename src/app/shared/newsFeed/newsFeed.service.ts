import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RssData} from './RssData';

@Injectable()
export class NewsFeedService {

  constructor(private http: HttpClient) {
  }

  getNewsFeed() {
    return this.http.get<RssData>('//dore-java.herokuapp.com/rss');
  }
}
