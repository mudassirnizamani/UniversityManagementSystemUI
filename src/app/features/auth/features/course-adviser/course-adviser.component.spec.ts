import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAdviserComponent } from './course-adviser.component';

describe('CourseAdviserComponent', () => {
  let component: CourseAdviserComponent;
  let fixture: ComponentFixture<CourseAdviserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseAdviserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAdviserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
