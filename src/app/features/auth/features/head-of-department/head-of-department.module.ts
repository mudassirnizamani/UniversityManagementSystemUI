import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadOfDepartmentRoutingModule } from './head-of-department-routing.module';
import { HeadOfDepartmentComponent } from './head-of-department.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  declarations: [HeadOfDepartmentComponent],
  imports: [
    CommonModule,
    HeadOfDepartmentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    RippleModule,
    ButtonModule,
    PasswordModule,
  ],
})
export class HeadOfDepartmentModule {}
