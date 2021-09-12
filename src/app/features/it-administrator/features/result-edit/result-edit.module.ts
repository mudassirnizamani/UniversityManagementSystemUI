import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultEditRoutingModule } from './result-edit-routing.module';
import { ResultEditComponent } from './result-edit.component';


@NgModule({
  declarations: [
    ResultEditComponent
  ],
  imports: [
    CommonModule,
    ResultEditRoutingModule
  ]
})
export class ResultEditModule { }
