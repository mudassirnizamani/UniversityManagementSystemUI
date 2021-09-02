import { TestBed } from '@angular/core/testing';

import { DeanGuard } from './dean.guard';

describe('DeanGuard', () => {
  let guard: DeanGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DeanGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
