import { TestBed, inject } from '@angular/core/testing';

import { InvestigationsService } from './investigations.service';

describe('InvestigationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InvestigationsService]
    });
  });

  it('should be created', inject([InvestigationsService], (service: InvestigationsService) => {
    expect(service).toBeTruthy();
  }));
});
