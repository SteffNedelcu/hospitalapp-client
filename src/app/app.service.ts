import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule, HttpHandler  } from '@angular/common/http';
import { Router } from '@angular/router';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { User } from './models/User';

@Injectable()
export class AppService {
  authenticated: boolean;
  checked = false;
  toogled = false;
  user: User;

  constructor(private http: HttpClient, private router: Router) {
  }
  authenticate(credentials, callback) {

    const headers = new HttpHeaders( {});
    console.log(credentials);
    if ( credentials.username && credentials.password) {
      this.sendCredential(credentials).subscribe(
        res => {
          this.user = res;
           this.authenticated = true;
           this.checked = true;
           return callback && callback();
        }, (err) => {console.log(err);   this.authenticated = false;   });
    }else {
      console.log('fara credentials');
      headers.append('Content-Type', 'application/json');
        this.http.get('http://localhost:8080/user/profile', {headers: headers, withCredentials : true}).subscribe(response => {
          if (response['username']) {
            this.user = response;
              this.authenticated = true;
              this.checked = true;
              return callback && callback();
          }
          console.log(' App. Service: ' + this.authenticated);
      }, (err) => {
        console.log(err);
        this.authenticated = false;
        this.checked = true;

        if (this.router.url === '/login') {
          console.log('in login');
        }else {
          this.router.navigateByUrl('/login');
        }
      });
    }
}
  sendCredential(credentials) {
    const url = 'http://localhost:8080/index';
    const params = 'username=' + credentials.username + '&password=' + credentials.password;
    const headersA = new HttpHeaders(
    {
      'Content-Type': 'application/x-www-form-urlencoded'
      // 'Access-Control-Allow-Credentials' : true
    });
    return this.http.post(url, params, { headers: headersA, withCredentials : true });
  }

  logout() {
    this.checked = false;
    const url = 'http://localhost:8080/logout';
    return this.http.get(url, { withCredentials: true });
  }
  toggle() {
    this.toogled = (this.toogled === true ) ? false : true;
  }

}
