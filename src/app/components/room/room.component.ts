import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FlashMessagesService } from 'angular2-flash-messages';
import { RoomService } from '../../services/room.service';
import { Room } from '../../models/Room';
import { BedPacient } from '../../models/BedPacient';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css', '../../app.component.css']
})
export class RoomComponent implements OnInit {
  id: number;
  room: Room;
  bedPacients: BedPacient[];
  medicalFormsIds: number[];
  constructor(
    private roomService: RoomService,
    private route: ActivatedRoute,
    private location: Location,
    private _flashMessagesService: FlashMessagesService) {
    }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.roomService.getOne(this.id).subscribe(room => { this.room = room;
      console.log(this.room);
    } );
    this.roomService.getBedPacients(this.id).subscribe(bedPacients => { this.bedPacients = bedPacients;
      console.log(this.bedPacients);
    } );
    this.roomService.getMedicalForms(this.id).subscribe(medicalFormsIds => { this.medicalFormsIds = medicalFormsIds;
      console.log(this.medicalFormsIds);
    } );
  }
  isActive(status) {
    return (status === 1) ? true : false;
}

}
