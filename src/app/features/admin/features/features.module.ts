import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexModule } from './index/index.module';
import { ProfileModule } from './profile/profile.module';
import { SettingsModule } from './settings/settings.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, IndexModule, ProfileModule, SettingsModule],
})
export class FeaturesModule {}
