import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalFormDetailsComponent } from './medical-form-details.component';

describe('MedicalFormDetailsComponent', () => {
  let component: MedicalFormDetailsComponent;
  let fixture: ComponentFixture<MedicalFormDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalFormDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalFormDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
