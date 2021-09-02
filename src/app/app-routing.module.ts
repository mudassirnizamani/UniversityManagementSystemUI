import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './core/guards/admin/admin.guard';
import { AuthGuard } from './core/guards/auth/auth.guard';
import { CourseAdviserGuard } from './core/guards/course-adviser/course-adviser.guard';
import { DeanGuard } from './core/guards/dean/dean.guard';
import { HeadOfDepartmentGuard } from './core/guards/head-of-department/head-of-department.guard';
import { ItadministratorGuard } from './core/guards/itadministrator/itadministrator.guard';
import { StudentGuard } from './core/guards/student/student.guard';
import { SuperAdminGuard } from './core/guards/super-admin/super-admin.guard';

// Importing Guards

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/auth/auth.module').then((module) => module.AuthModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'student',
    loadChildren: () =>
      import('./features/student/student.module').then(
        (module) => module.StudentModule
      ),
    canActivate: [StudentGuard],
  },
  {
    path: 'itadministrator',
    loadChildren: () =>
      import('./features/it-administrator/it-administrator.module').then(
        (module) => module.ItAdministratorModule
      ),
    canActivate: [ItadministratorGuard],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./features/admin/admin.module').then(
        (module) => module.AdminModule
      ),
    canActivate: [AdminGuard],
  },
  {
    path: 'courseadviser',
    loadChildren: () =>
      import('./features/course-adviser/course-adviser.module').then(
        (module) => module.CourseAdviserModule
      ),
    canActivate: [CourseAdviserGuard],
  },
  {
    path: 'dean',
    loadChildren: () =>
      import('./features/dean/dean.module').then((module) => module.DeanModule),
    canActivate: [DeanGuard],
  },
  {
    path: 'headofdepartment',
    loadChildren: () =>
      import('./features/head-of-department/head-of-department.module').then(
        (module) => module.HeadOfDepartmentModule
      ),
    canActivate: [HeadOfDepartmentGuard],
  },
  {
    path: 'superadmin',
    loadChildren: () =>
      import('./features/superadmin/superadmin.module').then(
        (module) => module.SuperadminModule
      ),
    canActivate: [SuperAdminGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
