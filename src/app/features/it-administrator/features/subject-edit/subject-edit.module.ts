import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectEditRoutingModule } from './subject-edit-routing.module';
import { SubjectEditComponent } from './subject-edit.component';


@NgModule({
  declarations: [
    SubjectEditComponent
  ],
  imports: [
    CommonModule,
    SubjectEditRoutingModule
  ]
})
export class SubjectEditModule { }
