import { TestBed } from '@angular/core/testing';

import { ItadministratorGuard } from './itadministrator.guard';

describe('ItadministratorGuard', () => {
  let guard: ItadministratorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ItadministratorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
