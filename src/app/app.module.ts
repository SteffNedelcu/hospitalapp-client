import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { RouterModule, Routes } from '@angular/router';

import { LoginService } from './services/login.service';
import { DiagnosticsService } from './services/diagnostics.service';
import { PacientService } from './services/pacient.service';
import { MedicalFormService } from './services/medical-form.service';
import { FloorService } from './services/floor.service';
import { RoomService } from './services/room.service';
import { InvestigationsService } from './services/investigations.service';

import { AddDiagnosticComponent } from './components/add-diagnostic/add-diagnostic.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
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
import { DashbarComponent } from './components/dashbar/dashbar.component';
import { SearchComponent } from './components/search/search.component';
import { VitalSignsComponent } from './components/vital-signs/vital-signs.component';
import { InvestigationsComponent } from './components/investigations/investigations.component';
import { InvestigationsListComponent } from './components/investigations-list/investigations-list.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    AddDiagnosticComponent,
    PacientDetailsComponent,
    MedicalFormAddComponent,
    MedicalFormDetailsComponent,
    EditDiagnosticComponent,
    AddTreatmentComponent,
    EditTreatmentComponent,
    AddVitalsComponent,
    FloorsListComponent,
    FloorComponent,
    RoomComponent,
    DashboardComponent,
    DashbarComponent,
    SearchComponent,
    VitalSignsComponent,
    InvestigationsComponent,
    InvestigationsListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [
    AppService,
    LoginService,
    DiagnosticsService,
    PacientService,
    MedicalFormService,
    FloorService,
    RoomService,
    InvestigationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
