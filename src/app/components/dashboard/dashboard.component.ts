import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { AppService } from '../../app.service';
import {Router} from '@angular/router';
import { MedicalFormService } from '../../services/medical-form.service';
import { MedicalForm } from '../../models/MedicalForm';
import { Pacient } from '../../models/Pacient';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  medicalForms: MedicalForm[];
  pacients: Pacient[];
  status: number;
  constructor(
    private medicalFormService: MedicalFormService,
    private app: AppService,
    private router: Router) {
      this.status = 12;
      console.log('dashboard');
      this.medicalFormService.getUserMedicalForms(this.status).subscribe(medicalForms => { this.medicalForms = medicalForms;
        console.log(this.medicalForms);
      });
      this.medicalFormService.getUserMedicalFormsPacients(this.status).subscribe(pacients => { this.pacients = pacients;
        console.log(this.pacients);
      });
  }
  authenticated() { return this.app.authenticated; }
  ngOnInit() {
  }

}
