import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { SimpleLayoutComponent } from './_layouts/simple-layout/simple-layout.component';
import { FullLayoutComponent } from './_layouts/full-layout/full-layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login', component: SimpleLayoutComponent, children: [
      { path: '', loadChildren: './login/login.module#LoginModule' }
    ]
  },
  {
    path: 'dashboard', component: FullLayoutComponent, children: [
      { path: '', loadChildren: './dashboard/dashboard.module#DashboardModule' }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }