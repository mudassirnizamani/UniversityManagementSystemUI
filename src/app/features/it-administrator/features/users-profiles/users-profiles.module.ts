import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersProfilesRoutingModule } from './users-profiles-routing.module';
import { UsersProfilesComponent } from './users-profiles.component';


@NgModule({
  declarations: [
    UsersProfilesComponent
  ],
  imports: [
    CommonModule,
    UsersProfilesRoutingModule
  ]
})
export class UsersProfilesModule { }
