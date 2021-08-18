import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Importing MainModules - Mudasir Ali
import { BlocksModule } from './blocks/blocks.module';
import { CoreModule } from './core/core.module';
import { FeaturesModule } from './features/features.module';
import { SharedModule } from './shared/shared.module';


// Importing PrimeNg Modules

// Custom Modules - Mudasir Ali
const MainModules = [BlocksModule, CoreModule, FeaturesModule, SharedModule]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
