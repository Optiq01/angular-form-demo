import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributeListComponent } from './attribute-list.component';
import { AttributeFormComponentModule } from './attribute-form-component/attribute-form-component.module';



@NgModule({
  declarations: [AttributeListComponent],
  imports: [
    CommonModule,
    AttributeFormComponentModule
  ],
  exports: [CommonModule, AttributeListComponent],
  bootstrap: [AttributeListComponent]
})
export class AttributeListComponentModule { }
