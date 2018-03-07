import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { AppService } from '../../app.service';
import {Router} from '@angular/router';
import { MedicalFormService } from '../../services/medical-form.service';
import { MedicalForm } from '../../models/MedicalForm';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  medicalForms: MedicalForm[];
  constructor(
    private medicalFormService: MedicalFormService,
    private app: AppService,
    private router: Router) {
      console.log('dashboard');
      this.medicalFormService.getUserActiveMedicalForms().subscribe(medicalForms => { this.medicalForms = medicalForms;
        console.log(this.medicalForms);
      });
  }
  authenticated() { return this.app.authenticated; }
  ngOnInit() {
  }

}
