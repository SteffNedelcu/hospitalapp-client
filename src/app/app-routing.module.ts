import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login.service';
import { DiagnosticsService } from './services/diagnostics.service';
import { AddDiagnosticComponent } from './components/add-diagnostic/add-diagnostic.component';
import { PacientDetailsComponent } from './components/pacient-details/pacient-details.component';
import { MedicalFormAddComponent } from './components/medical-form-add/medical-form-add.component';
import { MedicalFormDetailsComponent } from './components/medical-form-details/medical-form-details.component';
import { EditDiagnosticComponent } from './components/edit-diagnostic/edit-diagnostic.component';
import { AddTreatmentComponent } from './components/add-treatment/add-treatment.component';
import { EditTreatmentComponent } from './components/edit-treatment/edit-treatment.component';
import { AddVitalsComponent } from './components/add-vitals/add-vitals.component';
import { FloorsListComponent } from './components/floors-list/floors-list.component';
import { FloorComponent } from './components/floor/floor.component';
import { RoomComponent } from './components/room/room.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PacientService } from './services/pacient.service';
import { SearchComponent } from './components/search/search.component';
import { VitalSignsComponent } from './components/vital-signs/vital-signs.component';
import { InvestigationsComponent } from './components/investigations/investigations.component';
import { InvestigationsListComponent } from './components/investigations-list/investigations-list.component';


const appRoutes: Routes = [
  { path: '',
  redirectTo: '/login',
  pathMatch: 'full' },
  { path: 'login',  component: LoginComponent  },
  { path: 'dashboard',  component: DashboardComponent  },
  { path: 'pacient/:id', component: PacientDetailsComponent },
  { path: 'search', component: SearchComponent },
  { path: 'fisa-medicala/:id', component: MedicalFormDetailsComponent },
  { path: 'fisa-medicala/:id/vital-signs', component: VitalSignsComponent },
  { path: 'etaje', component: FloorsListComponent },
  { path: 'etaj/:id', component: FloorComponent },
  { path: 'room/:id', component: RoomComponent },
  { path: 'analize/:status', component: InvestigationsListComponent },
  { path: 'analiza/:id', component: InvestigationsComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(appRoutes)]
})

export class AppRoutingModule { }
