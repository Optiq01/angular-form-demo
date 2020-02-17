import { Component } from '@angular/core';

import { DemoData } from './demo-data';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  Data = DemoData;
}