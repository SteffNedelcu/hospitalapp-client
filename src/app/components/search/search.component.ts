import { Component, OnInit } from '@angular/core';
import { Pacient } from '../../models/Pacient';
import { PacientService } from '../../services/pacient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  term: String;
  pacientList: Pacient[];
  constructor(private pacientService: PacientService, private router: Router) { }

  ngOnInit() {
  }

  submit() {
    event.preventDefault();
    console.log(this.term);
    this.pacientService.search(this.term).subscribe(pacients => {this.pacientList = pacients;
      if (this.pacientList.length === 1) {
        this.router.navigateByUrl('/pacient/' + this.pacientList[0].cnp);
      }

    });
  }
}
