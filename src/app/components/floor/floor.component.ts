import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FlashMessagesService } from 'angular2-flash-messages';

import { FloorService } from '../../services/floor.service';
import { Floor } from '../../models/Floor';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.css', '../../app.component.css']
})
export class FloorComponent implements OnInit {
  id: number;
  floor: Floor;

  constructor(
    private floorService: FloorService,
    private route: ActivatedRoute,
    private location: Location,
    private _flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.floorService.getOne(this.id).subscribe(floor => { this.floor = floor;
      console.log(this.floor);
    } );
  }
  isActive(status) {
    return (status === 1) ? true : false;
}

}
