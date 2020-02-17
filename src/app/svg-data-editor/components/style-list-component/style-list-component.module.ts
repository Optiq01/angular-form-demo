import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StyleListComponent } from './style-list.component';
import { PropertyFormComponentModule } from './property-form-component/property-form-component.module';



@NgModule({
  declarations: [StyleListComponent],
  imports: [
    CommonModule,
    PropertyFormComponentModule
  ],
  exports: [StyleListComponent, PropertyFormComponentModule],
  bootstrap: [StyleListComponent]
})
export class StyleListComponentModule { }
