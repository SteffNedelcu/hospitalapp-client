import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RoomService {

  constructor(private http: Http) {
    console.log('Room service ....  ');
  }

  getOne(id) {
    const url = 'http://localhost:8080/room/' + id;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(url, {headers: headers, withCredentials : true}).map(res => res.json()
     );
  }
  getBedPacients(id) {
    const url = 'http://localhost:8080/room/' + id + '/bed-pacients';
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(url, {headers: headers, withCredentials : true}).map(res => res.json()
     );
  }
  getMedicalForms(id) {
    const url = 'http://localhost:8080/room/' + id + '/medical-forms';
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(url, {headers: headers, withCredentials : true}).map(res => res.json()
     );
  }
}
