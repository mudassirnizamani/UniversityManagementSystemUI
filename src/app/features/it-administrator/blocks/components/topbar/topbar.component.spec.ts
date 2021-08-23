import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItAdministratorTopbarComponent } from './topbar.component';

describe('ItAdministratorTopbarComponent', () => {
  let component: ItAdministratorTopbarComponent;
  let fixture: ComponentFixture<ItAdministratorTopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItAdministratorTopbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItAdministratorTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
