import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class InvestigationsService {

  constructor(private http: Http) {
    console.log('Floor service ....  ');
  }
  getInvestigation(id) {
    const url = 'http://localhost:8080/investigations/' + id ;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(url, {headers: headers, withCredentials : true}).map(res => res.json()
     );
  }
  getInvestigations(status) {
    const url = 'http://localhost:8080/investigations/by-status/' + status + '';
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(url, {headers: headers, withCredentials : true}).map(res => res.json()
     );
  }

}
