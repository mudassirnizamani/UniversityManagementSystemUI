import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadOfDepartmentComponent } from './head-of-department.component';

const routes: Routes = [
  {
    path: '',
    component: HeadOfDepartmentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeadOfDepartmentRoutingModule {}
