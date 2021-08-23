import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { ItAdministratorSidebarComponent } from './components/sidebar/sidebar.component';
import { ItAdministratorTopbarComponent } from './components/topbar/topbar.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    BaseLayoutComponent,
    ItAdministratorSidebarComponent,
    ItAdministratorTopbarComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule],
})
export class BlocksModule {}
