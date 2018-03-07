import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Floor } from '../../models/Floor';
import { FloorService } from '../../services/floor.service';

@Component({
  selector: 'app-floors-list',
  templateUrl: './floors-list.component.html',
  styleUrls: ['./floors-list.component.css', '../../app.component.css']
})
export class FloorsListComponent implements OnInit {
  floors: Floor[];
  constructor(
    private floorService: FloorService,
    private route: ActivatedRoute,
    private location: Location,
    private _flashMessagesService: FlashMessagesService
  ) {
    this.floorService.getAll().subscribe(floors => { this.floors = floors;
      console.log(this.floors);
    } );
   }

  ngOnInit() {
  }
  isActive(status) {
      return (status === 1) ? true : false;
  }

}
