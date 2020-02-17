import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { FormGroup, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'view-box-form-component',
  templateUrl: './view-box-form.component.html',
  styleUrls: ['./view-box-form.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()=>ViewBoxFormComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(()=>ViewBoxFormComponent)
    }
  ]
})

export class ViewBoxFormComponent implements OnInit, ControlValueAccessor {

  /*@Input()*/ ViewBoxFormData: FormGroup;

  constructor() { }

  ngOnInit() {
    //this.showData();
  }

  showData(){ console.log(this.ViewBoxFormData.controls); }

  public onTouched : ()=> void =()=>{};

  writeValue(val: any):void{ val && this.ViewBoxFormData.setValue(val, {emitEvent: false}); console.log(val); }

  registerOnChange(fn: any): void{ this.ViewBoxFormData.valueChanges.subscribe(fn); console.log(fn); }

  registerOnTouched(fn: any): void{ this.onTouched = fn; }

  setDisabledState?(isDisabled: boolean): void{ isDisabled ? this.ViewBoxFormData.disable() : this.ViewBoxFormData.enable(); }

  validate(c: AbstractControl): ValidationErrors | null{
    return this.ViewBoxFormData.valid ? null : {invalidForm:{valid: false, message: 'field invalid'}};
  }


}
