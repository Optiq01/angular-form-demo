import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

import { CreateStylePropertyForm }  from '../../functions/form-functions/create-style-property-form/create-style-property-form';

@Component({
  selector: 'style-list-component',
  templateUrl: './style-list.component.html',
  styleUrls: ['./style-list.component.css']
})
export class StyleListComponent implements OnInit {

  @Input() StylePropertyListData: FormArray;

  constructor() { }

  ngOnInit() {
  }

  addProperty(): void{
    const newProperty: FormGroup = CreateStylePropertyForm();
    let propList: FormArray = <FormArray>this.StylePropertyListData as FormArray;
    //console.log(newAttribute);
    propList.push(newProperty);
    //this.showData();
  }

  deleteProperty(item: number): void{
    let propList:FormArray = this.StylePropertyListData as FormArray;

    console.log(item);

    propList.removeAt(item);
  }
}
