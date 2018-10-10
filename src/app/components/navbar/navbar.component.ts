import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { AppService } from '../../app.service';
import { Router } from '@angular/router';
import { User } from '../../models/User';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


    user: User;
    constructor(private app: AppService, private router: Router) {
    }


    getDisplay() {
        this.user = this.app.user;
        return this.app.authenticated;
    }
    logout() {
        this.app.logout().subscribe(
          res => {
            this.router.navigateByUrl('/login');
         }, (err) => {this.router.navigateByUrl('/login');   }
        );
      }
    ngOnInit() {
    }
    toggleDashbar() {
        this.app.toggle();
    }
}
