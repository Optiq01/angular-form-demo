import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StyleListComponentModule } from './style-list-component/style-list-component.module';
import { AttributeListComponentModule } from './attribute-list-component/attribute-list-component.module';
import { ViewBoxFormComponentModule } from './view-box-form-component/view-box-form-component.module';
import { ElementListComponentModule } from './element-list-component/element-list-component.module';
import { SvgObjectFormComponentModule } from './svg-object-form-component/svg-object-form-component.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StyleListComponentModule,
    AttributeListComponentModule,
    ViewBoxFormComponentModule,
    ElementListComponentModule,
    SvgObjectFormComponentModule
  ],
  exports: [
    CommonModule,
    StyleListComponentModule,
    AttributeListComponentModule,
    ViewBoxFormComponentModule,
    ElementListComponentModule,
    SvgObjectFormComponentModule
  ]
})
export class SvgDataEditorComponentsModule { }
