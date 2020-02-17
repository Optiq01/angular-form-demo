import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewBoxFormComponent } from './view-box-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ViewBoxFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [CommonModule, ReactiveFormsModule, ViewBoxFormComponent],
  bootstrap: [ViewBoxFormComponent]
})
export class ViewBoxFormComponentModule { }
