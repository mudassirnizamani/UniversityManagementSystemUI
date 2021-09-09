import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './blocks/layouts/base-layout/base-layout.component';

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/index/index.module').then(
            (module) => module.IndexModule
          ),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./features/users/users.module').then(
            (module) => module.UsersModule
          ),
      },
      {
        path: 'users/profile/:username',
        loadChildren: () =>
          import('./features/users-profiles/users-profiles.module').then(
            (module) => module.UsersProfilesModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./features/profile/profile.module').then(
            (module) => module.ProfileModule
          ),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./features/settings/settings.module').then(
            (module) => module.SettingsModule
          ),
      },
      {
        path: 'departments',
        loadChildren: () =>
          import('./features/departments/departments.module').then(
            (module) => module.DepartmentsModule
          ),
      },
      {
        path: 'departments/:id',
        loadChildren: () =>
          import('./features/department-edit/department-edit.module').then(
            (module) => module.DepartmentEditModule
          ),
      },
      {
        path: 'faculties',
        loadChildren: () =>
          import('./features/faculties/faculties.module').then(
            (module) => module.FacultiesModule
          ),
      },
      {
        path: 'faculties/:id',
        loadChildren: () =>
          import('./features/faculty-edit/faculty-edit.module').then(
            (module) => module.FacultyEditModule
          ),
      },
      {
        path: 'subjects',
        loadChildren: () =>
          import('./features/subjects/subjects.module').then(
            (module) => module.SubjectsModule
          ),
      },
      {
        path: 'subjects/:id',
        loadChildren: () =>
          import('./features/subject-edit/subject-edit.module').then(
            (module) => module.SubjectEditModule
          ),
      },
      {
        path: 'results',
        loadChildren: () =>
          import('./features/results/results.module').then(
            (module) => module.ResultsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItAdministratorRoutingModule {}
