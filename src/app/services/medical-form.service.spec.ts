import { TestBed, inject } from '@angular/core/testing';

import { MedicalFormService } from './medical-form.service';

describe('MedicalFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MedicalFormService]
    });
  });

  it('should be created', inject([MedicalFormService], (service: MedicalFormService) => {
    expect(service).toBeTruthy();
  }));
});
