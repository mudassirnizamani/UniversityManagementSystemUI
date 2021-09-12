import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultEditComponent } from './result-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ResultEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultEditRoutingModule {}
