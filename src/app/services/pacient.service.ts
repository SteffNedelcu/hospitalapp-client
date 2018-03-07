import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PacientService {

  constructor(private http: Http) {
    console.log('Pacient service ....  ');
  }

  getOne(cnp) {
    const url = 'http://localhost:8080/pacient/' + cnp;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(url, {headers: headers, withCredentials : true}).map(res => res.json()
     );
  }
  getOneMedicalForms(cnp) {
    const url = 'http://localhost:8080/pacient/' + cnp + '/medical-forms';
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(url, {headers: headers, withCredentials : true}).map(res => res.json()
     );
  }
  getOneCurrentMedicalForm(cnp) {
    const url = 'http://localhost:8080/pacient/' + cnp + '/active-form';
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(url, {headers: headers, withCredentials : true}).map(res => res.json()
     );
  }
  addMedicalForm(id) {
    const medicalForm = {'pacientCnp': id };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log('http://localhost:8080/pacient/' + id + '/add-medical-form');
    return this.http.post('http://localhost:8080/pacient/' + id + '/add-medical-form', JSON.stringify(medicalForm),
     {headers: headers, withCredentials : true})
      .map( res => res.json());
  }
  search(term) {
    const url = 'http://localhost:8080/pacient/search/' + term;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(url, {headers: headers, withCredentials : true}).map(res => res.json()
     );
  }
}
