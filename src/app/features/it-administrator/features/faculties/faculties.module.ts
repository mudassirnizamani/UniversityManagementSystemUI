import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacultiesRoutingModule } from './faculties-routing.module';
import { FacultiesComponent } from './faculties.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [FacultiesComponent],
  imports: [
    CommonModule,
    FacultiesRoutingModule,
    ButtonModule,
    TableModule,
    DialogModule,
    DropdownModule,
    FormsModule,
    InputTextModule,
  ],
})
export class FacultiesModule {}
