import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';

import { SvgDataEditorShellComponent } from './svg-data-editor-shell.component';
import { SvgDataEditorComponentsModule } from './components/svg-data-editor-components.module';


@NgModule({
  declarations: [SvgDataEditorShellComponent],
  imports: [
    CommonModule,
    FormsModule,
    SvgDataEditorComponentsModule
  ],
  exports: [
    CommonModule,
    SvgDataEditorShellComponent,
    FormsModule,
    SvgDataEditorComponentsModule
  ]
})
export class SvgDataEditorModule { }
