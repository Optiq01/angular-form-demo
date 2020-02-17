import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SvgObjectFormComponent } from './svg-object-form.component';

import { ViewBoxFormComponentModule } from '../view-box-form-component/view-box-form-component.module';
import { AttributeListComponentModule } from '../attribute-list-component/attribute-list-component.module';
import { StyleListComponentModule } from '../style-list-component/style-list-component.module';
import { ElementListComponentModule } from '../element-list-component/element-list-component.module';



@NgModule({
  declarations: [SvgObjectFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ViewBoxFormComponentModule,
    AttributeListComponentModule,
    StyleListComponentModule,
    ElementListComponentModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SvgObjectFormComponent,
    ViewBoxFormComponentModule,
    AttributeListComponentModule,
    StyleListComponentModule,
    ElementListComponentModule
  ],
  bootstrap: [SvgObjectFormComponent]
})
export class SvgObjectFormComponentModule { }
