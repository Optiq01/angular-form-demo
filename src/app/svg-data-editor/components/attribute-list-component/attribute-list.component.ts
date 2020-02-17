import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { FormArray, FormGroup, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';

import { CreateAttributeForm } from '../../functions/create-attribute-form';

@Component({
  selector: 'attribute-list-component',
  templateUrl: './attribute-list.component.html',
  styleUrls: ['./attribute-list.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()=>AttributeListComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(()=>AttributeListComponent)
    }
  ]
})
export class AttributeListComponent implements OnInit, ControlValueAccessor {

  /*@Input()*/ AttributeListData: FormArray;

  constructor() { }

  ngOnInit() {
    this.showData();
  }

  showData(){ console.log(this.AttributeListData); }


  addAttribute(): void{
    const newAttribute: FormGroup = CreateAttributeForm();
    let attrList: FormArray = <FormArray>this.AttributeListData as FormArray;
    //console.log(newAttribute);
    attrList.push(newAttribute);
    //this.showData();
  }

  deleteAttribute(item: number): void{
    let attrList:FormArray = this.AttributeListData as FormArray;

    console.log(item);

    attrList.removeAt(item);
    
    //this.AttributeListData.removeAt(item);
  }



  public onTouched : ()=> void =()=>{};

  writeValue(val: any):void{ val && this.AttributeListData.setValue(val, {emitEvent: false}); console.log(val); }

  registerOnChange(fn: any): void{ this.AttributeListData.valueChanges.subscribe(fn); console.log(fn); }

  registerOnTouched(fn: any): void{ this.onTouched = fn; }

  setDisabledState?(isDisabled: boolean): void{ isDisabled ? this.AttributeListData.disable() : this.AttributeListData.enable(); }

  validate(c: AbstractControl): ValidationErrors | null{
    return this.AttributeListData.valid ? null : {invalidForm:{valid: false, message: 'field invalid'}};
  }

}
