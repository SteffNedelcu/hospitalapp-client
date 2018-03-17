import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FlashMessagesService } from 'angular2-flash-messages';

import { Investigation } from '../../models/Investigation';
import { InvestigationsService } from '../../services/investigations.service';
import { HttpClient, HttpResponse, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-investigations',
  templateUrl: './investigations.component.html',
  styleUrls: ['./investigations.component.css', '../../app.component.css']
})
export class InvestigationsComponent implements OnInit {
  id: number;
  investigation: Investigation;
  newInvestigation: Investigation;
  selectedFiles: FileList;
  currentFileUpload: File;
  fileName: string;
  ean13: string;
  hasCodeBool: boolean;
  progress: { percentage: number } = { percentage: 0 };
  constructor(
    private investigationService: InvestigationsService,
    private route: ActivatedRoute,
    private location: Location,
    private _flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.investigationService.getInvestigation(this.id).subscribe(investigation => { this.investigation = investigation;
      this.hasCodeBool = (investigation.code && investigation.code.length > 0) ? true : false;
      console.log(this.investigation);
    } );
  }
  hasCode() {
    return this.hasCodeBool;
  }
  edit() {
    event.preventDefault();
    this.newInvestigation = {
      id: this.investigation.id,
      observations: this.investigation.observations
    };
      this.investigationService.edit(this.newInvestigation).subscribe(investigation => {
      this.investigation = investigation;
       console.log(investigation);
       this._flashMessagesService.show('Analiza a fost actualizata!', {cssClass: 'alert-success', timeout: 5000 });
    });
  }
  editCode() {
    event.preventDefault();
    this.newInvestigation = {
      id: this.investigation.id,
      code: this.investigation.code
    };
    console.log(this.newInvestigation);
      this.investigationService.editCode(this.newInvestigation).subscribe(investigation => {
      this.investigation = investigation;
       console.log(investigation);
       this.hasCodeBool = true;
       this._flashMessagesService.show('Analiza a fost actualizata!', {cssClass: 'alert-success', timeout: 5000 });
    });
  }
  selectFile(event) {

    this.selectedFiles = event.target.files;
    this.fileName = this.selectedFiles.item(0).name;
    console.log(this.selectedFiles.item(0));
  }
  upload() {
    this.progress.percentage = 0;
    this.currentFileUpload = this.selectedFiles.item(0);
    this.investigationService.pushFileToStorage(this.id , this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        this._flashMessagesService.show('Fisa a fost urcata!', {cssClass: 'alert-success', timeout: 5000 });
      }
    });
    this.selectedFiles = undefined;
  }

}
