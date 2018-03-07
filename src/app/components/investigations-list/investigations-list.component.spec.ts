import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigationsListComponent } from './investigations-list.component';

describe('InvestigationsListComponent', () => {
  let component: InvestigationsListComponent;
  let fixture: ComponentFixture<InvestigationsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestigationsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestigationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
