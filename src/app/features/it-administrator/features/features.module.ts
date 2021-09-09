import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersModule } from './users/users.module';
import { DepartmentsModule } from './departments/departments.module';
import { FacultiesModule } from './faculties/faculties.module';
import { IndexModule } from './index/index.module';
import { ProfileModule } from './profile/profile.module';
import { SettingsModule } from './settings/settings.module';
import { SubjectsModule } from './subjects/subjects.module';
import { UsersProfilesModule } from './users-profiles/users-profiles.module';
import { FacultyEditModule } from './faculty-edit/faculty-edit.module';
import { ResultsModule } from './results/results.module';
import { SubjectEditModule } from './subject-edit/subject-edit.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DepartmentsModule,
    FacultiesModule,
    IndexModule,
    ProfileModule,
    SettingsModule,
    SubjectsModule,
    SubjectEditModule,
    UsersModule,
    UsersProfilesModule,
    ResultsModule,
    FacultyEditModule,
  ],
})
export class FeaturesModule {}
