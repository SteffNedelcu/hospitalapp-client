import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FlashMessagesService } from 'angular2-flash-messages';

import { Investigation } from '../../models/Investigation';
import { InvestigationsService } from '../../services/investigations.service';


@Component({
  selector: 'app-investigations',
  templateUrl: './investigations.component.html',
  styleUrls: ['./investigations.component.css', '../../app.component.css']
})
export class InvestigationsComponent implements OnInit {
  id: Number;
  investigation: Investigation;
  constructor(
    private investigationService: InvestigationsService,
    private route: ActivatedRoute,
    private location: Location,
    private _flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.investigationService.getInvestigation(this.id).subscribe(investigation => { this.investigation = investigation;
      console.log(this.investigation);
    } );
  }

}
