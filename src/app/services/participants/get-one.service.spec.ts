import { TestBed, inject } from '@angular/core/testing';

import { GetOneService } from './get-one.service';

describe('GetOneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetOneService]
    });
  });

  it('should be created', inject([GetOneService], (service: GetOneService) => {
    expect(service).toBeTruthy();
  }));
});
