import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FlashMessagesService } from 'angular2-flash-messages';

import { Investigation } from '../../models/Investigation';
import { InvestigationsService } from '../../services/investigations.service';

@Component({
  selector: 'app-investigations-list',
  templateUrl: './investigations-list.component.html',
  styleUrls: ['./investigations-list.component.css', '../../app.component.css']
})
export class InvestigationsListComponent implements OnInit {

  status: Number;
  investigations: Investigation[];
  constructor(
    private investigationService: InvestigationsService,
    private route: ActivatedRoute,
    private location: Location,
    private _flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
    this.status = +this.route.snapshot.paramMap.get('status');
    this.investigationService.getInvestigations(this.status).subscribe(investigations => { this.investigations = investigations;
      console.log(this.investigations);
    } );
  }
}
