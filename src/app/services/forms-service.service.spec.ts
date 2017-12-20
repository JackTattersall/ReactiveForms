import { TestBed, inject } from '@angular/core/testing';

import { FormsServiceService } from './forms-service.service';

describe('FormsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormsServiceService]
    });
  });

  it('should be created', inject([FormsServiceService], (service: FormsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
