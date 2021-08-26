import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersProfilesComponent } from './users-profiles.component';

const routes: Routes = [
  {
    path: '',
    component: UsersProfilesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersProfilesRoutingModule {}
