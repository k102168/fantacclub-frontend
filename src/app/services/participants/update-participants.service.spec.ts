import { TestBed, inject } from '@angular/core/testing';

import { UpdateParticipantsService } from './update-participants.service';

describe('UpdateParticipantsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateParticipantsService]
    });
  });

  it('should be created', inject([UpdateParticipantsService], (service: UpdateParticipantsService) => {
    expect(service).toBeTruthy();
  }));
});
