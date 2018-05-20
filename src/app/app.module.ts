import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FullLayoutComponent } from './_layouts/full-layout/full-layout.component';
import { SimpleLayoutComponent } from './_layouts/simple-layout/simple-layout.component';
import { AngularMaterialModule } from './_layouts/angular-material/angular-material.module';
import { NavbarComponent } from './_layouts/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    SimpleLayoutComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
