import { TestBed, inject } from '@angular/core/testing';

import { PostcompetitionService } from './postcompetition.service';

describe('PostcompetitionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostcompetitionService]
    });
  });

  it('should be created', inject([PostcompetitionService], (service: PostcompetitionService) => {
    expect(service).toBeTruthy();
  }));
});
