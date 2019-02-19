import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {QouteData} from './QouteData';

@Injectable()
export class QouteService {

  constructor(private http: HttpClient) {
  }

  getQouteData() {
    return this.http.get<QouteData>('//dore-java.herokuapp.com/getQoute');
}

}
