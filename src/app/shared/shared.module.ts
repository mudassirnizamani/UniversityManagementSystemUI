import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarUserCardComponent } from './components/sidebar-user-card/sidebar-user-card.component';

@NgModule({
  declarations: [SidebarUserCardComponent],
  imports: [CommonModule],
  exports: [SidebarUserCardComponent],
})
export class SharedModule {}
