import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, RequestMethod} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpEvent, HttpRequest, HttpClient } from '@angular/common/http';
import { Request } from '@angular/http';
import { Investigation } from '../models/Investigation';

@Injectable()
export class InvestigationsService {
  request: Request;
  constructor(private http: Http, private http2: HttpClient) {
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
  pushFileToStorage(id: number , file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();

    formdata.append('file', file);
    /*
    const headers = new Headers();
    headers.append('enctype', 'multipart/form-data');

     return this.http.post('http://localhost:8080/investigations/' + id + '/upload', formdata,
    {headers: headers, withCredentials : true })
     .map( res => res.json()); */

     const req = new HttpRequest('POST', 'http://localhost:8080/investigations/' + id + '/post', formdata, {
      reportProgress: true,
      withCredentials : true,
      responseType: 'text'
    });
    return this.http2.request(req);
  }
  getFiles(): Observable<string[]> {
    const url = 'http://localhost:8080/investigations/get-file';
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(url, {headers: headers, withCredentials : true}).map(res => res.json()
     );
  }
  edit(investigation: Investigation) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

     return this.http.put('http://localhost:8080/investigations/edit', JSON.stringify(investigation),
    {headers: headers, withCredentials : true })
     .map( res => res.json());
  }
  editCode(investigation: Investigation) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

     return this.http.put('http://localhost:8080/investigations/edit-code', JSON.stringify(investigation),
    {headers: headers, withCredentials : true })
     .map( res => res.json());
  }
}
