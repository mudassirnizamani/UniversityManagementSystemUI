import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItAdministratorRoutingModule } from './it-administrator-routing.module';
import { ItAdministratorComponent } from './it-administrator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  declarations: [ItAdministratorComponent],
  imports: [
    CommonModule,
    ItAdministratorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    RippleModule,
    ButtonModule,
    PasswordModule,
  ],
})
export class ItAdministratorModule {}
