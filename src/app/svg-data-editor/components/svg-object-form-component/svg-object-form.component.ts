import { Component, OnInit, Input,forwardRef, OnChanges } from '@angular/core';
import {OvaadSvgDataObject} from '../../../interfaces';
import {FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'svg-object-form-component',
  templateUrl: './svg-object-form.component.html',
  styleUrls: ['./svg-object-form.component.css']
})
export class SvgObjectFormComponent implements OnInit, OnChanges {

  @Input()SvgFormData: FormGroup;

  constructor() { }

  ngOnInit() {
    //this.showData();
  }

  ngOnChanges(){
    this.showData();
  }

  showData(){ console.log(this.SvgFormData); }

  onSubmit(){}
}
