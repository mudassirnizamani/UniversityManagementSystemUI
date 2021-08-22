import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItAdministratorComponent } from './it-administrator.component';

describe('ItAdministratorComponent', () => {
  let component: ItAdministratorComponent;
  let fixture: ComponentFixture<ItAdministratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItAdministratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
