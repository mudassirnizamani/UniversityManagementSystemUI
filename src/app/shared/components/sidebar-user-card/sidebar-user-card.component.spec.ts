import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarUserCardComponent } from './sidebar-user-card.component';

describe('SidebarUserCardComponent', () => {
  let component: SidebarUserCardComponent;
  let fixture: ComponentFixture<SidebarUserCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarUserCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarUserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
