import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseAdviserRoutingModule } from './course-adviser-routing.module';
import { CourseAdviserComponent } from './course-adviser.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  declarations: [CourseAdviserComponent],
  imports: [
    CommonModule,
    CourseAdviserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    RippleModule,
    ButtonModule,
    PasswordModule,
  ],
})
export class CourseAdviserModule {}
