import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeanComponent } from './dean.component';

const routes: Routes = [
  {
    path: '',
    component: DeanComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeanRoutingModule {}
