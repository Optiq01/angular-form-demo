import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { FormGroup, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'element-form-component',
  templateUrl: './element-form.component.html',
  styleUrls: ['./element-form.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()=>ElementFormComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(()=>ElementFormComponent)
    }
  ]
})
export class ElementFormComponent implements OnInit, ControlValueAccessor {

  /*@Input()*/ ElementFormData: FormGroup;

  constructor() { }

  ngOnInit() {
    //console.log(this.ElementFormData);
  }

  showData(){ console.log(this.ElementFormData); }



  public onTouched : ()=> void =()=>{};

  writeValue(val: any):void{ val && this.ElementFormData.setValue(val, {emitEvent: false}); console.log(val); }

  registerOnChange(fn: any): void{ this.ElementFormData.valueChanges.subscribe(fn); console.log(fn); }

  registerOnTouched(fn: any): void{ this.onTouched = fn; }

  setDisabledState?(isDisabled: boolean): void{ isDisabled ? this.ElementFormData.disable() : this.ElementFormData.enable(); }

  validate(c: AbstractControl): ValidationErrors | null{
    return this.ElementFormData.valid ? null : {invalidForm:{valid: false, message: 'field invalid'}};
  }


}
