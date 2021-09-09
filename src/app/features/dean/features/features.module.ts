import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexModule } from './index/index.module';
import { SettingsModule } from './settings/settings.module';
import { ProfileModule } from './profile/profile.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, IndexModule, SettingsModule, ProfileModule],
})
export class FeaturesModule {}
