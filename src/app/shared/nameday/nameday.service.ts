import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NameDayData} from './NameDayData';

@Injectable()
export class NamedayService {

  constructor(private http: HttpClient) {
  }

  getNamesDayToday() {
    return this.http.get<NameDayData>('//localhost:8080/getNameDayToday');
  }
}