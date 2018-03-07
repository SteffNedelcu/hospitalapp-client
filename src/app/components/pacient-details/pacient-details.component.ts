import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PacientService } from '../../services/pacient.service';
import { Pacient } from '../../models/Pacient';
import { MedicalForm } from '../../models/MedicalForm';

@Component({
  selector: 'app-pacient-details',
  templateUrl: './pacient-details.component.html',
  styleUrls: ['./pacient-details.component.css', '../../app.component.css'],
  moduleId: module.id,
})
export class PacientDetailsComponent implements OnInit {
  id: Number;
  pacient: Pacient;
  medicalForms: MedicalForm[];
  activeMedicalForms: String;
  test = 1;

  constructor(private pacientService: PacientService, private route: ActivatedRoute,
    private location: Location) {
  }

  ngOnInit() { this.id = +this.route.snapshot.paramMap.get('id');
    this.pacientService.getOne(this.id).subscribe(pacient => { this.pacient = pacient; console.log(this.pacient); } );
    this.pacientService.getOneMedicalForms(this.id).subscribe(medicalForms => {
      this.medicalForms = medicalForms;
    }  );
    this.pacientService.getOneCurrentMedicalForm(this.id).subscribe(activeMedicalForms => {this.activeMedicalForms = activeMedicalForms;

    } );
  }
  addMedicalForm() {
    console.log('Adding medical form...');
    this.pacientService.addMedicalForm(this.id).subscribe(medicalForm => {
      this.medicalForms.push(medicalForm);
    });
  }
  medicalInsurance() {
    return this.pacient.statusAsigurat ? true : false ;
  }
  getListText(obj) {
      const names = obj.map( e => (e.status === 1) ? e.code : null );
      return (names.length) ? names.join(', ') : ' - ';
  }

}
