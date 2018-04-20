import { TestBed, inject } from '@angular/core/testing';

import { UpdatecompetitionService } from './updatecompetition.service';

describe('UpdatecompetitionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdatecompetitionService]
    });
  });

  it('should be created', inject([UpdatecompetitionService], (service: UpdatecompetitionService) => {
    expect(service).toBeTruthy();
  }));
});
