import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FlashMessagesService } from 'angular2-flash-messages';

import { MedicalFormService } from '../../services/medical-form.service';
import { FloorService } from '../../services/floor.service';

import { Pacient } from '../../models/Pacient';
import { Floor } from '../../models/Floor';
import { MedicalForm } from '../../models/MedicalForm';
import { Room } from '../../models/Room';
import { Bed } from '../../models/Bed';
import { BedPacient } from '../../models/BedPacient';
import { Diagnostic } from '../../models/Diagnostic';
import { Treatment } from '../../models/Treatment';
import { Investigation } from '../../models/Investigation';


@Component({
  selector: 'app-medical-form-details',
  templateUrl: './medical-form-details.component.html',
  styleUrls: ['./medical-form-details.component.css', '../../app.component.css']
})
export class MedicalFormDetailsComponent implements OnInit {
  id: Number;
  medicalForm: MedicalForm;
  pacient: Pacient;
  floors: Floor[];
  rooms: Room[];
  beds: Bed[];
  addDiagnosticForm: Boolean;
  addInvestigationForm: Boolean;
  addTreatmentForm: Boolean;
  addBed: Boolean;
  newMedicalForm: MedicalForm;
  activeBed: BedPacient;
  bedPacintList: BedPacient[];
  newDiagnostic: Diagnostic;
  newTreatment: Treatment;
  newInvestigation: Investigation;

  constructor(private medicalFormService: MedicalFormService,
    private floorService: FloorService,
    private route: ActivatedRoute,
    private location: Location,
    private _flashMessagesService: FlashMessagesService) {
      this.addDiagnosticForm = false;
      this.addTreatmentForm = false;
      this.addInvestigationForm = false;
      this.addBed = false;

      this.newDiagnostic = {
        name: '',
        codeCIM: '',
        cronical: 0,
        allergy: 0
      };
      this.newTreatment = {
        name: '',
        codeCIM: '',
        vaccine: 0,
        frequency: ''
      };
      this.newInvestigation = {
        name: '',
        codeCIM: '',
        observations: ''
      };
    }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.medicalFormService.getOne(this.id).subscribe(medicalForm => { this.medicalForm = medicalForm;
      console.log(this.medicalForm);
      this.getActiveBed();
    } );
    this.medicalFormService.getPacient(this.id).subscribe(pacient => this.pacient = pacient );
  }
  showAddDiagnostic() {
    event.preventDefault();
    this.addDiagnosticForm = (this.addDiagnosticForm === false) ? true : false;
  }
  showAddTreatment() {
    event.preventDefault();
    this.addTreatmentForm = (this.addTreatmentForm === false) ? true : false;
  }
  showAddInvestigation() {
    event.preventDefault();
    this.addInvestigationForm = (this.addInvestigationForm === false) ? true : false;
  }
  showAddBed() {
    event.preventDefault();
    this.addBed = (this.addBed === false) ? true : false;
    this.floorService.getAll().subscribe(floors => { this.floors = floors ; } );
  }
  onChangeFloor(e) {
    const floor = this.floors.find((f) =>   f.code === e  );
      this.rooms = floor.roomList;

  }
  onChangeRoom(e) {
    const room = this.rooms.find((r) =>   r.code === e  );
      this.beds = room.bedList;
  }
  onChangeBed(e) {
    const bed = this.beds.find((r) =>   r.code === e  );

    console.log(bed);
    this.medicalFormService.addBed(this.medicalForm.id, bed).subscribe(reBed => {

     console.log(reBed);
    });
  }
  edit() {
    event.preventDefault();
    this.newMedicalForm = {
      id: this.medicalForm.id,
      code: this.medicalForm.code,
      observationsCheckUp: this.medicalForm.observationsCheckUp,
      observationsCheckIn: this.medicalForm.observationsCheckIn,
      observationsCheckOut: this.medicalForm.observationsCheckOut
    };
    this.medicalFormService.edit(this.newMedicalForm).subscribe(medicalForm => {
      this.medicalForm = medicalForm;
       console.log(medicalForm);
       this._flashMessagesService.show('Fisa medicata a fost actualizata!', {cssClass: 'alert-success', timeout: 5000 });
    });
  }
  getActiveBed() {
    this.bedPacintList = this.medicalForm.bedPacientList;
    for (let i = 0; i < this.bedPacintList.length; i++) {
      if ( this.bedPacintList[i].date_leave === null && this.bedPacintList[i].status === 1) {
        this.activeBed = this.bedPacintList[i];
      }

    }
  }
  addDiagnostic() {
    console.log('addDiagnostic');
    console.log(this.newDiagnostic);
    this.medicalFormService.addDiagnostic(this.medicalForm.id, this.newDiagnostic).subscribe(diagnostic => {
      this.medicalForm.diagnosticList.unshift(diagnostic);
       console.log(diagnostic);
       this._flashMessagesService.show('Diagnosticul a fost adaugat cu succes!', {cssClass: 'alert-success', timeout: 5000 });
    });
    this.addDiagnosticForm = false;
    this.newDiagnostic = {
      name: '',
      codeCIM: '',
      cronical: 0,
      allergy: 0};
  }
  addTreatment() {
    console.log('addTreatment');
    console.log(this.newTreatment);
    this.medicalFormService.addTreatment(this.medicalForm.id, this.newTreatment).subscribe(treatment => {
      this.medicalForm.treatmentList.unshift(treatment);
       console.log(treatment);
       this._flashMessagesService.show('Tratamentul a fost adaugat cu succes!', {cssClass: 'alert-success', timeout: 5000 });
    });
    this.addTreatmentForm = false;
    this.newTreatment = {
      name: '',
      codeCIM: '',
      vaccine: 0,
      frequency: ''
    };
  }
  addInvestigation() {
    console.log('addInvestigation');
    console.log(this.newInvestigation);
    this.medicalFormService.addInvestigation(this.medicalForm.id, this.newInvestigation).subscribe(investigation => {
      this.medicalForm.treatmentList.unshift(investigation);
       console.log(investigation);
       this._flashMessagesService.show('Investigatia a fost ceruta!', {cssClass: 'alert-success', timeout: 5000 });
    });
    this.addInvestigationForm = false;
    this.newInvestigation = {
      name: '',
      codeCIM: '',
      observations: ''
    };
  }
  medicalInsurance() {
    return this.pacient.statusAsigurat ? true : false ;
  }
  getListText(obj) {
    const names = obj.map( e => (e.status === 1) ? e.code : null );
    return (names.length) ? names.join(', ') : ' - ';
  }
  deleteTreatment() {

  }
  deleteInvestigation() {

  }
  isActive(e) {
    const result = e.status === 1 ? true : false;
    console.log(e.name + ' ' + e.status + ' ' + result);
    return result;
  }
  deleteDiagnostic(id) {
    if (confirm(' Are you sure to delete ' + id)) {
      console.log('delete diagnostic');
      this.medicalFormService.deleteDiagnostic(id).subscribe(() => {
        this._flashMessagesService.show('Diagnosticul a fost sters!', {cssClass: 'alert-success', timeout: 5000 });
      });
      for (let i = 0; i < this.medicalForm.diagnosticList.length; i++) {
        if (this.medicalForm.diagnosticList[i].id === id) {
          this.medicalForm.diagnosticList.splice(i, 1);
        }
      }
    }
  }
  adminstrateTreatment(id) {
    console.log('test adaugare tratament');
  }
}
