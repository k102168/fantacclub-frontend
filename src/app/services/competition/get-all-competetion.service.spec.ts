import { TestBed, inject } from '@angular/core/testing';

import { GetAllCompetetionService } from './get-all-competetion.service';

describe('GetAllCompetetionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetAllCompetetionService]
    });
  });

  it('should be created', inject([GetAllCompetetionService], (service: GetAllCompetetionService) => {
    expect(service).toBeTruthy();
  }));
});
