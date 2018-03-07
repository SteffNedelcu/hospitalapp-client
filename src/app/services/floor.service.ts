import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class FloorService {

  constructor(private http: Http) {
    console.log('Floor service ....  ');
  }
  getAll() {
    const url = 'http://localhost:8080/floor/';
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(url, {headers: headers, withCredentials : true}).map(res => res.json()
     );
  }
  getOne(id) {
    const url = 'http://localhost:8080/floor/' + id;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(url, {headers: headers, withCredentials : true}).map(res => res.json()
     );
  }

}
