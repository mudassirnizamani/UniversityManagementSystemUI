import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { FeaturesModule } from './features/features.module';
import { BlocksModule } from './blocks/blocks.module';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, AuthRoutingModule, FeaturesModule, BlocksModule],
  providers: [AuthService],
})
export class AuthModule {}
