import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { RouterModule } from '@angular/router';
import { StudentSidebarComponent } from './components/sidebar/sidebar.component';
import { StudentTopbarComponent } from './components/topbar/topbar.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    BaseLayoutComponent,
    StudentSidebarComponent,
    StudentTopbarComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule],
})
export class BlocksModule {}
