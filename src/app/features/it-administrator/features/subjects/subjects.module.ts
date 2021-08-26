import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectsRoutingModule } from './subjects-routing.module';
import { SubjectsComponent } from './subjects.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [SubjectsComponent],
  imports: [CommonModule, SubjectsRoutingModule, ButtonModule, TableModule],
})
export class SubjectsModule {}
