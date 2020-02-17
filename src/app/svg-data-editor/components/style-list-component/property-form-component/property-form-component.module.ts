import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyFormComponent } from './property-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [PropertyFormComponent],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  exports: [CommonModule, ReactiveFormsModule, PropertyFormComponent],
  bootstrap: [PropertyFormComponent]
})
export class PropertyFormComponentModule { }
