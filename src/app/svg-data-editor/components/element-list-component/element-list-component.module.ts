import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementListComponent } from './element-list.component';
import { ElementFormComponentModule } from './element-form-component/element-form-component.module';



@NgModule({
  declarations: [ElementListComponent],
  imports: [
    CommonModule,
    ElementFormComponentModule
  ],
  exports: [CommonModule, ElementListComponent, ElementFormComponentModule],
  bootstrap: [ElementListComponent]
})
export class ElementListComponentModule { }
