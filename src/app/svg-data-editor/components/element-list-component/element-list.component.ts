import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { FormGroup, FormArray, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import { CreateGraphicElementForm } from '../../functions/form-functions/create-graphic-element-form/create-graphic-element-form';

@Component({
  selector: 'element-list-component',
  templateUrl: './element-list.component.html',
  styleUrls: ['./element-list.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()=>ElementListComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(()=>ElementListComponent)
    }
  ]
})
export class ElementListComponent implements OnInit, ControlValueAccessor {

  /*@Input()*/ ElementListData: FormArray;

  constructor() { }

  ngOnInit() {
  }

  addElement(): void{
    const newElement: FormGroup = CreateGraphicElementForm();
    let elementList: FormArray = <FormArray>this.ElementListData as FormArray;
    console.log(newElement);
    elementList.push(newElement);
    //this.showData();
  }

  deleteElement(item: number): void{
    let elementList:FormArray = this.ElementListData as FormArray;

    console.log(item);

    elementList.removeAt(item);
  }



  public onTouched : ()=> void =()=>{};

  writeValue(val: any):void{ val && this.ElementListData.setValue(val, {emitEvent: false}); console.log(val); }

  registerOnChange(fn: any): void{ this.ElementListData.valueChanges.subscribe(fn); console.log(fn); }

  registerOnTouched(fn: any): void{ this.onTouched = fn; }

  setDisabledState?(isDisabled: boolean): void{ isDisabled ? this.ElementListData.disable() : this.ElementListData.enable(); }

  validate(c: AbstractControl): ValidationErrors | null{
    return this.ElementListData.valid ? null : {invalidForm:{valid: false, message: 'field invalid'}};
  }

}
