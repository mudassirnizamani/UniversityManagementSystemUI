import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './blocks/layouts/auth-layout/auth-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/signin/signin.module').then(
            (module) => module.SigninModule
          ),
      },
      {
        path: 'auth',
        loadChildren: () =>
          import('./features/signin/signin.module').then(
            (module) => module.SigninModule
          ),
      },
      {
        path: 'auth/signin',
        loadChildren: () =>
          import('./features/signin/signin.module').then(
            (module) => module.SigninModule
          ),
      },
      {
        path: 'auth/signup',
        loadChildren: () =>
          import('./features/signup/signup.module').then(
            (module) => module.SignupModule
          ),
      },
      {
        path: 'auth/student',
        loadChildren: () =>
          import('./features/student/student.module').then(
            (module) => module.StudentModule
          ),
      },
      {
        path: 'auth/courseadviser',
        loadChildren: () =>
          import('./features/course-adviser/course-adviser.module').then(
            (module) => module.CourseAdviserModule
          ),
      },
      {
        path: 'auth/itadministrator',
        loadChildren: () =>
          import('./features/it-administrator/it-administrator.module').then(
            (module) => module.ItAdministratorModule
          ),
      },
      {
        path: 'auth/dean',
        loadChildren: () =>
          import('./features/dean/dean.module').then(
            (module) => module.DeanModule
          ),
      },
      {
        path: 'auth/admin',
        loadChildren: () =>
          import('./features/admin/admin.module').then(
            (module) => module.AdminModule
          ),
      },
      {
        path: 'auth/superadmin',
        loadChildren: () =>
          import('./features/super-admin/super-admin.module').then(
            (module) => module.SuperAdminModule
          ),
      },
      {
        path: 'auth/headofdepartment',
        loadChildren: () =>
          import(
            './features/head-of-department/head-of-department.module'
          ).then((module) => module.HeadOfDepartmentModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
