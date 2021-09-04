import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseAdviserRoutingModule } from './course-adviser-routing.module';
import { FeaturesModule } from '../features.module';
import { BlocksModule } from './blocks/blocks.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CourseAdviserRoutingModule,
    FeaturesModule,
    BlocksModule,
  ],
})
export class CourseAdviserModule {}
