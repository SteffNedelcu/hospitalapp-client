import { Component } from '@angular/core';
import { AppService } from './app.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private app: AppService, private http: HttpClient, private router: Router) {
    this.app.authenticate({}, undefined);
  }
  getDisplay() {
    return this.app.authenticated;
  }
  isLoginPage(){
    const res = (this.router.url === '/login') ? true : false;
    return res;
  }
  logout() {
    this.app.logout().subscribe(
      res => {
        location.reload();
        this.router.navigateByUrl('/login');
 
     }, (err) => {this.router.navigateByUrl('/login');   }
    );
  }
}
