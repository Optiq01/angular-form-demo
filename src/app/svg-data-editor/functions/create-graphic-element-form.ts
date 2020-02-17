import { FormGroup, FormControl, FormArray, Validators }                    from '@angular/forms';
import { OvaadSvgStyleProperty, OvaadGraphicAttribute, OvaadGraphicObject } from '@interfaces/interfaces';

import { CreateAttributeForm }     from '../create-attribute-form/create-attribute-form';
import { CreateStylePropertyForm } from '../create-style-property-form/create-style-property-form';



export function CreateGraphicElementForm(data?: OvaadGraphicObject): FormGroup{
    let elementForm: FormGroup = new FormGroup({
      element     : new FormControl((data ? data.element    : ''), Validators.required),
      selfClosing : new FormControl((data? data.selfClosing : false), Validators.required),
      attributes  : new FormArray([]),
      styles      : new FormArray([]),
      subElements : new FormArray([])
    });
  
    if(data && data.attributes.length > 0){
      data.attributes.forEach((a: OvaadGraphicAttribute)=>{
        let attrArray: FormArray = elementForm.get('attributes') as FormArray;
        attrArray.push(CreateAttributeForm(a));
      });
    }
  
    if(data && data.styles.length > 0){
      data.styles.forEach((a: OvaadSvgStyleProperty)=>{
        let styleArray: FormArray = elementForm.get('styles') as FormArray;
        styleArray.push(CreateStylePropertyForm(a));
      });
    }
  
    if(data && data.subElements){
      data.subElements.forEach((a:OvaadGraphicObject)=>{
        let subElementArray: FormArray = elementForm.get('subElements') as FormArray;
        subElementArray.push(CreateGraphicElementForm(a));
      });
      
    }
    
    return elementForm as FormGroup;
  }