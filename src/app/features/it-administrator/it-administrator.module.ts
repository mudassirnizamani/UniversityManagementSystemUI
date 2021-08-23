import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItAdministratorRoutingModule } from './it-administrator-routing.module';
import { FeaturesModule } from './features/features.module';
import { BlocksModule } from './blocks/blocks.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ItAdministratorRoutingModule,
    FeaturesModule,
    BlocksModule,
  ],
})
export class ItAdministratorModule {}
