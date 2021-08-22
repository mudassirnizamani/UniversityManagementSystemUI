import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItAdministratorComponent } from './it-administrator.component';

const routes: Routes = [
  {
    path: '',
    component: ItAdministratorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItAdministratorRoutingModule {}
