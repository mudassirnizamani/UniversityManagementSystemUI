import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectEditComponent } from './subject-edit.component';

const routes: Routes = [
  {
    path: '',
    component: SubjectEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubjectEditRoutingModule {}
