import { TestBed } from '@angular/core/testing';

import { CourseAdviserGuard } from './course-adviser.guard';

describe('CourseAdviserGuard', () => {
  let guard: CourseAdviserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CourseAdviserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
