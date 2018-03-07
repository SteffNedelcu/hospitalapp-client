import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';

import { AppService } from '../../app.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-dashbar',
  templateUrl: './dashbar.component.html',
  styleUrls: ['./dashbar.component.css']
})
export class DashbarComponent implements OnInit {

  user: User;
  userAuthorities: string[];
  constructor(private app: AppService) {
  }

  ngOnInit() {
  }
  getDisplay() {
    if (!this.user) {
      this.user = this.app.user;
    }
    if (this.user && !this.userAuthorities) {
      this.userAuthorities = this.user.authorities.map( (u) =>  u.authority );
    }
    return this.app.authenticated;
  }
  isMedic() {
    const role = this.userAuthorities.find( (a) => a === 'ROLE_MEDIC' );
    return (role) ? true : false;
  }
  isNurse() {
    const role = this.userAuthorities.find( (a) => a === 'ROLE_NURSE' );
    return (role) ? true : false;
  }
  isLab() {
    const role = this.userAuthorities.find( (a) => a === 'ROLE_LAB' );
    return (role) ? true : false;
  }
  isAdmin() {
    const role = this.userAuthorities.find( (a) => a === 'ROLE_ADMIN' );
    return (role) ? true : false;
  }

}
