import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { SvgDataEditorModule} from './svg-data-editor/svg-data-editor.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, SvgDataEditorModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
