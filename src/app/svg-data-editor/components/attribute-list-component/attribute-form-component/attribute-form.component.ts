import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormGroup, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'attribute-form-component',
  templateUrl: './attribute-form.component.html',
  styleUrls: ['./attribute-form.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()=>AttributeFormComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(()=>AttributeFormComponent)
    }
  ]
})
export class AttributeFormComponent implements OnInit, ControlValueAccessor {

  /*@Input()*/ AttributeFormData: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  public onTouched : ()=> void =()=>{};

  writeValue(val: any):void{ val && this.AttributeFormData.setValue(val, {emitEvent: false}); console.log(val); }

  registerOnChange(fn: any): void{ this.AttributeFormData.valueChanges.subscribe(fn); console.log(fn); }

  registerOnTouched(fn: any): void{ this.onTouched = fn; }

  setDisabledState?(isDisabled: boolean): void{ isDisabled ? this.AttributeFormData.disable() : this.AttributeFormData.enable(); }

  validate(c: AbstractControl): ValidationErrors | null{
    return this.AttributeFormData.valid ? null : {invalidForm:{valid: false, message: 'field invalid'}};
  }

}
