import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeanRoutingModule } from './dean-routing.module';
import { FeaturesModule } from './features/features.module';
import { BlocksModule } from './blocks/blocks.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, DeanRoutingModule, FeaturesModule, BlocksModule],
})
export class DeanModule {}
