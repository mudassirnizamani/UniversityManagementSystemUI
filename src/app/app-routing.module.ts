import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth/auth.guard';
import { StudentGuard } from './core/guards/student/student.guard';

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
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
