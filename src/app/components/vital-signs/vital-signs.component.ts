import { Component, ViewChild, ElementRef,  AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FlashMessagesService } from 'angular2-flash-messages';
import { MedicalFormService } from '../../services/medical-form.service';
import { MedicalForm } from '../../models/MedicalForm';
import { VitalSigns } from '../../models/VitalSigns';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-vital-signs',
  templateUrl: './vital-signs.component.html',
  styleUrls: ['./vital-signs.component.css']
})
export class VitalSignsComponent implements AfterViewInit {
  id: number;
  vitalSigns: VitalSigns[];
  canvas: any;
  ctx: any;
  addVitalSignsForm: Boolean;
  newVitalSigns: VitalSigns;
  @ViewChild('pulseChart') pulseChart: ElementRef;

  constructor(private medicalFormService: MedicalFormService,
    private route: ActivatedRoute,
    private location: Location,
    private _flashMessagesService: FlashMessagesService) {
      this.addVitalSignsForm = false;
      this.newVitalSigns = {
        pulse: 0,
        temperature: 0,
        respiratoryRate: 0,
        bloodPreasureD: 0,
        bloodPreasureS: 0,
        weight: 0
      };
    }

  ngAfterViewInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.medicalFormService.getVitalSigns(this.id).subscribe(vitalSigns => {
      this.vitalSigns = vitalSigns;

      this.initGraphBloodPreasure();
      this.initGraphPulse();
      this.initGraphTemperature();
      this.initGraphWeight();
      this.initGraphRespiratoryRate();

    });

  }

  initGraphPulse() {
      this.initGraph('pulseChart', [{
        label: 'Puls',
        lineTension: 0,
        data: this.vitalSigns.map((v) => v.pulse),
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      }], Math.min.apply('Math', this.vitalSigns.map((v) => v.pulse)) - 10 ,
      Math.max.apply('Math', this.vitalSigns.map((v) => v.pulse)) + 10,
      this.vitalSigns.map((v) => v.date)
     );
  }
  initGraphWeight() {
      this.initGraph('weightChart', [{
        label: 'Greutate',
        lineTension: 0,
        data: this.vitalSigns.map((v) => v.weight),
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      }], Math.min.apply('Math', this.vitalSigns.map((v) => v.weight)) - 10 ,
      Math.max.apply('Math', this.vitalSigns.map((v) => v.weight)) + 10,
      this.vitalSigns.map((v) => v.date) );
  }
  initGraphRespiratoryRate() {
      this.initGraph('respiratoryRateChart', [{
        label: 'Rata respiratorie',
        lineTension: 0,
        data: this.vitalSigns.map((v) => v.respiratoryRate),
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      }], Math.min.apply('Math', this.vitalSigns.map((v) => v.respiratoryRate)) - 10 ,
      Math.max.apply('Math', this.vitalSigns.map((v) => v.respiratoryRate)) + 10,
      this.vitalSigns.map((v) => v.date) );
  }
  initGraphTemperature() {
    this.initGraph('temperatureChart',
        [{
          label: 'Temperatura',
          lineTension: 0,
          data: this.vitalSigns.map((v) => v.temperature),
          backgroundColor: 'transparent',
          borderColor: '#2d9921',
          borderWidth: 4,
          pointBackgroundColor: '#2d9921'
      }], Math.min.apply('Math', this.vitalSigns.map((v) => v.temperature)) - 10 ,
      Math.max.apply('Math', this.vitalSigns.map((v) => v.temperature)) + 10,
      this.vitalSigns.map((v) => v.date) );
  }
  initGraphBloodPreasure() {
    this.initGraph('bloodPreasureChart',
    [{
      label: 'Presiunea sistolica',
      lineTension: 0,
      data: this.vitalSigns.map((v) => v.bloodPreasureS),
      backgroundColor: 'transparent',
      borderColor: '#007bff',
      borderWidth: 4,
      pointBackgroundColor: '#007bff'
    }, {
        label: 'Presiunea diastolica',
        lineTension: 0,
        data: this.vitalSigns.map((v) => v.bloodPreasureD),
        backgroundColor: 'transparent',
        borderColor: '#f45942',
        borderWidth: 4,
        pointBackgroundColor: '#f45942'
    }], Math.min.apply('Math', this.vitalSigns.map((v) => v.bloodPreasureD)) - 10 ,
    Math.max.apply('Math', this.vitalSigns.map((v) => v.bloodPreasureS)) + 10,
    this.vitalSigns.map((v) => v.date));
  }
  initGraph(idGraph, dataInfo, minValue, maxValue, showLabels = []) {

    if  ( this.vitalSigns.length > 0) {
      this.canvas = document.getElementById(idGraph);
      this.ctx = this.canvas.getContext('2d');
      const myChart = new Chart(this.ctx, {
        type: 'line',
        data: {
           labels: showLabels,
            datasets: dataInfo
        },
        options: {
          responsive: true,
          display: true,
          scales: {
            yAxes: [{
              ticks: {
                suggestedMin: minValue,
                suggestedMax: maxValue,
              }
            }],
            xAxes: [{
              display: false
          }]
          },
          legend: {
            display: true,
          }
        }
      });
    }
  }
  showAddVitalSignsForm() {
    event.preventDefault();
    this.addVitalSignsForm = (this.addVitalSignsForm === false) ? true : false;
  }
  addVitals() {
    console.log('addTreatment');
    console.log(this.newVitalSigns);
    this.medicalFormService.addVitals(this.id, this.newVitalSigns).subscribe(vitalSigns => {
      this.vitalSigns.unshift(vitalSigns);
      this.initGraphBloodPreasure();
      this.initGraphPulse();
      this.initGraphTemperature();
      this.initGraphWeight();
      this.initGraphRespiratoryRate();
       console.log(vitalSigns);
       this._flashMessagesService.show('Semnele vitale au fost adaugate cu succes!', {cssClass: 'alert-success', timeout: 5000 });
    });
    this.addVitalSignsForm = false;
    this.newVitalSigns = {
      pulse: 0,
      temperature: 0,
      respiratoryRate: 0,
      bloodPreasureD: 0,
      bloodPreasureS: 0,
      weight: 0
    };
  }

}
