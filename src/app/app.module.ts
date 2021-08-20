import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Importing MainModules - Mudasir Ali
import { BlocksModule } from './blocks/blocks.module';
import { CoreModule } from './core/core.module';
import { FeaturesModule } from './features/features.module';
import { SharedModule } from './shared/shared.module';

// Importing PrimeNg Modules

// Custom Modules - Mudasir Ali
const MainModules = [BlocksModule, CoreModule, FeaturesModule, SharedModule];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      progressBar: true,
    }),
    HttpClientModule,
    MainModules,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
