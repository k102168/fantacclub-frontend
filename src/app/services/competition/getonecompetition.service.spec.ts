import { TestBed, inject } from '@angular/core/testing';

import { GetonecompetitionService } from './getonecompetition.service';

describe('GetonecompetitionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetonecompetitionService]
    });
  });

  it('should be created', inject([GetonecompetitionService], (service: GetonecompetitionService) => {
    expect(service).toBeTruthy();
  }));
});
