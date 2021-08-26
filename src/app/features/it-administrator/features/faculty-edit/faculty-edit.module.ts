import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacultyEditRoutingModule } from './faculty-edit-routing.module';
import { FacultyEditComponent } from './faculty-edit.component';


@NgModule({
  declarations: [
    FacultyEditComponent
  ],
  imports: [
    CommonModule,
    FacultyEditRoutingModule
  ]
})
export class FacultyEditModule { }
