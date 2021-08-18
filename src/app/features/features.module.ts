import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importing Features Modules - Mudasir Ali
import { AuthModule } from './auth/auth.module';
import { StudentModule } from './student/student.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, AuthModule, StudentModule],
})
export class FeaturesModule {}
