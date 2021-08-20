import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importing Guards
import { AuthGuard } from './core/guards/auth.guard';
import { StudentGuard } from './core/guards/student.guard';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
