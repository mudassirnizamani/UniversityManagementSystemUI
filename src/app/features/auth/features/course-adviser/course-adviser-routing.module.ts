import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseAdviserComponent } from './course-adviser.component';

const routes: Routes = [
  {
    path: '',
    component: CourseAdviserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseAdviserRoutingModule {}
