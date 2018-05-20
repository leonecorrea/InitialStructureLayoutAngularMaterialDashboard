import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Material Angular Modules */
import { MatButtonModule, MatGridListModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatGridListModule
  ],
  exports: [
    MatButtonModule,
    MatGridListModule
  ],
  declarations: []
})
export class AngularMaterialModule { }
