import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormArray, FormGroup, Validators }  from '@angular/forms';

import { OvaadSvgStyleProperty, OvaadGraphicAttribute, OvaadGraphicObject, OvaadSvgDataObject, ViewBoxParameters } from '@interfaces/interfaces';
import { CreateGraphicObjectForm } from './functions/form-functions/create-graphic-object-form/create-graphic-object-form';




@Component({
  selector: 'svg-data-editor-shell',
  templateUrl: './svg-data-editor-shell.component.html',
  styleUrls: ['./svg-data-editor-shell.component.css']
})
export class SvgDataEditorShellComponent implements OnInit {

  @Input() SvgData: OvaadSvgDataObject;

  DataPresent: boolean = false;

  SvgForm: FormGroup;

  constructor() {}

  ngOnInit() {
   if(this.SvgData){
      this.createForm(this.SvgData);
    }
  }

  createForm(data: OvaadSvgDataObject): void{

    const fullForm: FormGroup = CreateGraphicObjectForm(data);

    this.SvgForm = fullForm;
    this.DataPresent = true;
    //console.log(this.SvgForm);
  }

}