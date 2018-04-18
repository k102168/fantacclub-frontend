import { TestBed, inject } from '@angular/core/testing';

import { GetLeaderBoardService } from './get-leader-board.service';

describe('GetLeaderBoardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetLeaderBoardService]
    });
  });

  it('should be created', inject([GetLeaderBoardService], (service: GetLeaderBoardService) => {
    expect(service).toBeTruthy();
  }));
});
