import { TestBed, async, inject } from '@angular/core/testing';

import { UserCheckGuard } from './user-check.guard';

describe('UserCheckGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserCheckGuard]
    });
  });

  it('should ...', inject([UserCheckGuard], (guard: UserCheckGuard) => {
    expect(guard).toBeTruthy();
  }));
});
