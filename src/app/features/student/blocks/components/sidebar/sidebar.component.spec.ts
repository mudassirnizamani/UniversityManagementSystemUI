import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSidebarComponent } from './sidebar.component';

describe('StudentSidebarComponent', () => {
  let component: StudentSidebarComponent;
  let fixture: ComponentFixture<StudentSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentSidebarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
