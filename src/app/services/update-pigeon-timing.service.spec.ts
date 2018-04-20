import { TestBed, inject } from '@angular/core/testing';

import { UpdatePigeonTimingService } from './update-pigeon-timing.service';

describe('UpdatePigeonTimingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdatePigeonTimingService]
    });
  });

  it('should be created', inject([UpdatePigeonTimingService], (service: UpdatePigeonTimingService) => {
    expect(service).toBeTruthy();
  }));
});
