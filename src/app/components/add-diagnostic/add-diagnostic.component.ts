import { Component, OnInit } from '@angular/core';
import { DiagnosticsService } from '../../services/diagnostics.service';
import { Diagnostic} from '../../models/Diagnostic';

@Component({
  selector: 'app-add-diagnostic',
  templateUrl: './add-diagnostic.component.html',
  styleUrls: ['./add-diagnostic.component.css']
})
export class AddDiagnosticComponent implements OnInit {

  diagnostic = {
    observations: '',
    code: ''
  };

  constructor(private diagnosticsService: DiagnosticsService) {
    this.diagnostic.observations = 'test observations';
    this.diagnostic.code = 'angular';
   }

  onSubmit() {
    this.diagnosticsService.addDiagnostic(this.diagnostic).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    );
  }
  ngOnInit() {
  }

}
