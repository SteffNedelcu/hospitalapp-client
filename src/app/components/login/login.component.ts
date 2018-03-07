import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {LoginService} from '../../services/login.service';
import { AppService } from '../../app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggedIn: boolean;
  username: string;
  password: string;

 constructor (private app: AppService, private loginService: LoginService, private router: Router) {
  //  while (app.checked === false) {
  //   setTimeout(function(){ console.log('waiting...'); }, 3);
  //  }

    console.log('LoginComponent');
    this.authenticated();

  }

  onSubmit() {
    this.app.authenticate( { username: this.username, password: this.password}, () => {
      this.router.navigateByUrl('/dashboard');
  }
    );
  }
  authenticated() {
    this.app.authenticate( {}, () => {
      this.router.navigateByUrl('/dashboard');
      }
    );
  }

  ngOnInit() {}

}
