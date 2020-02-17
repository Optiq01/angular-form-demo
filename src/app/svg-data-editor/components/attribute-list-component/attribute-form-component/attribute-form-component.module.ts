import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ReactiveFormsModule} from '@angular/forms';

import { AttributeFormComponent } from './attribute-form.component';



@NgModule({
  declarations: [AttributeFormComponent],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  exports: [CommonModule, ReactiveFormsModule, AttributeFormComponent],
  bootstrap: [AttributeFormComponent]
})
export class AttributeFormComponentModule { }
