import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalFormAddComponent } from './medical-form-add.component';

describe('MedicalFormAddComponent', () => {
  let component: MedicalFormAddComponent;
  let fixture: ComponentFixture<MedicalFormAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalFormAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalFormAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
