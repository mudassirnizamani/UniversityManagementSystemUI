import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './services/user/user.service';
import { FacultyService } from './services/faculty/faculty.service';
import { SignoutService } from './services/signout/signout.service';
import { SubjectService } from './services/subject/subject.service';
import { DepartmentService } from './services/department/department.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    UserService,
    FacultyService,
    SignoutService,
    SubjectService,
    DepartmentService,
  ],
})
export class CoreModule {}
