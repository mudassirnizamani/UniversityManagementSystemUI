import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninModule } from './signin/signin.module';
import { SignupModule } from './signup/signup.module';
import { StudentModule } from './student/student.module';
import { CourseAdviserModule } from './course-adviser/course-adviser.module';
import { ItAdministratorModule } from './it-administrator/it-administrator.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SigninModule,
    SignupModule,
    StudentModule,
    CourseAdviserModule,
    ItAdministratorModule,
  ],
})
export class FeaturesModule {}
