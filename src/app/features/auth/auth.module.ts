import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { FeaturesModule } from './features/features.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, AuthRoutingModule, FeaturesModule],
})
export class AuthModule {}
