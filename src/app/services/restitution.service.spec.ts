import { TestBed, inject } from '@angular/core/testing';

import { RestitutionService } from './restitution.service';

describe('RestitutionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestitutionService]
    });
  });

  it('should be created', inject([RestitutionService], (service: RestitutionService) => {
    expect(service).toBeTruthy();
  }));
});
