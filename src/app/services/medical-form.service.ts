import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { MedicalForm } from '../models/MedicalForm';
import { Bed } from '../models/Bed';
import { Diagnostic } from '../models/Diagnostic';
import { Treatment } from '../models/Treatment';
import { Investigation } from '../models/Investigation';

@Injectable()
export class MedicalFormService {

  constructor(private http: Http) {
    console.log('Medical form service ....  ');
  }
  getOne(id) {
    const url = 'http://localhost:8080/medical-forms/' + id;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(url, {headers: headers, withCredentials : true}).map(res => res.json()
     );
  }
  getVitalSigns(id) {
    const url = 'http://localhost:8080/medical-forms/' + id + '/vital-signs';
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(url, {headers: headers, withCredentials : true}).map(res => res.json()
     );
  }
  getPacient(id) {
    const url = 'http://localhost:8080/medical-forms/' + id + '/pacient-info';
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(url, {headers: headers, withCredentials : true}).map(res => res.json()
     );
  }
  edit(medicalForm: MedicalForm) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(medicalForm);
    return this.http.put('http://localhost:8080/medical-forms/' + medicalForm.id + '/edit', JSON.stringify(medicalForm),
     {headers: headers, withCredentials : true})
      .map( res => res.json());
  }
  addBed(id: number , bed: Bed) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(bed);
    return this.http.post('http://localhost:8080/medical-forms/' + id + '/add-bed', JSON.stringify(bed),
     {headers: headers, withCredentials : true})
      .map( res => res.json());
  }
  addDiagnostic(id: number , diagnostic: Diagnostic) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(diagnostic);
    return this.http.post('http://localhost:8080/medical-forms/' + id + '/diagnostics/add', JSON.stringify(diagnostic),
     {headers: headers, withCredentials : true})
      .map( res => res.json());
  }
  addTreatment(id: number , treatment: Treatment) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(treatment);
    return this.http.post('http://localhost:8080/medical-forms/' + id + '/treatment/add', JSON.stringify(treatment),
     {headers: headers, withCredentials : true})
      .map( res => res.json());
  }
  addInvestigation(id: number , investigation: Investigation) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(investigation);
    return this.http.post('http://localhost:8080/medical-forms/' + id + '/investigation/add', JSON.stringify(investigation),
     {headers: headers, withCredentials : true})
      .map( res => res.json());
  }
  addVitals(id: number , investigation: Investigation) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(investigation);
    return this.http.post('http://localhost:8080/medical-forms/' + id + '/vital-signs/add', JSON.stringify(investigation),
     {headers: headers, withCredentials : true})
      .map( res => res.json());
  }
  getUserActiveMedicalForms() {
    const url = 'http://localhost:8080/medical-forms/user/active';
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(url, {headers: headers, withCredentials : true}).map(res => res.json()
     );
  }
  deleteDiagnostic(id) {
    const url = 'http://localhost:8080/medical-forms/delete/diagnostic/' + id;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.delete(url, {headers: headers, withCredentials : true}).map(res => res.json()
     );
  }
  
}
