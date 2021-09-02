import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { BlocksModule } from './blocks/blocks.module';
import { FeaturesModule } from './features/features.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, AdminRoutingModule, BlocksModule, FeaturesModule],
})
export class AdminModule {}
