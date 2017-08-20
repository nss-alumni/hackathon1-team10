import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MdButtonModule,
    MdCheckboxModule,
<<<<<<< Updated upstream
    MdIconRegistry,
    MdInputModule,
=======
>>>>>>> Stashed changes
    MdToolbarModule
} from '@angular/material';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
<<<<<<< Updated upstream
    MdInputModule,
    MdToolbarModule
  ],
  providers: [
      MdIconRegistry
=======
    MdToolbarModule
>>>>>>> Stashed changes
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
