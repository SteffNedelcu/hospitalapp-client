import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Diagnostic} from '../models/Diagnostic';

@Injectable()
export class DiagnosticsService {

  constructor (private http: Http) {}

  addDiagnostic(value) { 
    let url = 'http://localhost:8080/pacient/1940508420048/diagnostics/add';
    let params = JSON.stringify(value);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(params);
    return this.http.post(url, params, {headers: headers, withCredentials : true});
  }


}
