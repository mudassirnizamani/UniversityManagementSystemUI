import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing.module';
import { BlocksModule } from './blocks/blocks.module';
import { FeaturesModule } from './features/features.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, StudentRoutingModule, BlocksModule, FeaturesModule],
})
export class StudentModule {}
