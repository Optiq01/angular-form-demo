import { Component, OnInit, Input,forwardRef, OnChanges } from '@angular/core';
import {OvaadSvgDataObject} from '@interfaces/interfaces';
import {FormBuilder, FormGroup, FormControl, FormArray, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'svg-object-form-component',
  templateUrl: './svg-object-form.component.html',
  styleUrls: ['./svg-object-form.component.css']
})
export class SvgObjectFormComponent implements OnInit, OnChanges {

  @Input()SvgFormData: FormGroup;

  constructor(private fBuild: FormBuilder) { }

  ngOnInit() {
    //this.showData();
  }

  ngOnChanges(){
    this.showData();
  }

  showData(){ console.log(this.SvgFormData); }

  onSubmit(){}



  /*public onTouched : ()=> void =()=>{};

  writeValue(val: any):void{ val && this.SvgFormData.setValue(val, {emitEvent: false}); console.log(val); }

  registerOnChange(fn: any): void{ this.SvgFormData.valueChanges.subscribe(fn); console.log(fn); }

  registerOnTouched(fn: any): void{ this.onTouched = fn; }

  setDisabledState?(isDisabled: boolean): void{ isDisabled ? this.SvgFormData.disable() : this.SvgFormData.enable(); }

  validate(c: AbstractControl): ValidationErrors | null{
    return this.SvgFormData.valid ? null : {invalidForm:{valid: false, message: 'field invalid'}};
  }*/

}
