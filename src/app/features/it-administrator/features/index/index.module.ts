import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { TopOverviewComponent } from './components/top-overview/top-overview.component';

@NgModule({
  declarations: [IndexComponent, TopOverviewComponent],
  imports: [CommonModule, IndexRoutingModule],
})
export class IndexModule {}
