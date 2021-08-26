import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeanRoutingModule } from './dean-routing.module';
import { DeanComponent } from './dean.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  declarations: [DeanComponent],
  imports: [
    CommonModule,
    DeanRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    RippleModule,
    ButtonModule,
    PasswordModule,
  ],
})
export class DeanModule {}
