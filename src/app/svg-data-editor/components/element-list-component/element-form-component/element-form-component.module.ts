import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { ElementListComponentModule } from '../element-list-component.module';
import { ElementFormComponent } from './element-form.component';
import { AttributeListComponentModule } from '../../attribute-list-component/attribute-list-component.module';
import { StyleListComponentModule } from '../../style-list-component/style-list-component.module';




@NgModule({
  declarations: [ElementFormComponent],
  imports: [
    CommonModule, /*ElementListComponentModule,*/ AttributeListComponentModule, StyleListComponentModule
  ],
  exports: [CommonModule, /*ElementListComponentModule,*/ ElementFormComponent, AttributeListComponentModule, StyleListComponentModule],
  bootstrap: [ElementFormComponent]
})
export class ElementFormComponentModule { }
