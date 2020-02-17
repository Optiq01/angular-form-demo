import { FormGroup, FormArray, FormControl, Validators }                                        from '@angular/forms';
import { OvaadSvgDataObject, OvaadGraphicAttribute, OvaadSvgStyleProperty, OvaadGraphicObject } from '@interfaces/interfaces';

import { CreateAttributeForm }      from '../create-attribute-form/create-attribute-form';
import { CreateStylePropertyForm }  from '../create-style-property-form/create-style-property-form';
import { CreateGraphicElementForm } from '../create-graphic-element-form/create-graphic-element-form';
import { CreateViewBoxForm }        from '../create-view-box-form/create-view-box-form';



export function CreateGraphicObjectForm(data?: OvaadSvgDataObject): FormGroup{
    let graphicObjectForm: FormGroup = new FormGroup({
      title          : new FormControl((data ? data.title     : ''), Validators.required),
      graphicId      : new FormControl((data ? data.graphicId : ''), Validators.required),
      viewBox        : CreateViewBoxForm((data ? data.viewBox : undefined)), 
      coreAttributes : new FormArray([]),
      coreStyles     : new FormArray([]),
      elements       : new FormArray([])
    });
    
  
    if(data.coreAttributes.length > 0){
      data.coreAttributes.forEach((a: OvaadGraphicAttribute)=>{

        let coreAttrArray: FormArray = graphicObjectForm.get('coreAttributes') as FormArray;

        coreAttrArray.push(CreateAttributeForm(a));

      });
    }
  
    if(data.coreStyles.length > 0){
      data.coreStyles.forEach((a: OvaadSvgStyleProperty)=>{

        let coreStyleArray: FormArray = graphicObjectForm.get('coreStyles') as FormArray;

        coreStyleArray.push(CreateStylePropertyForm(a));

      });
    }
  
    if(data.elements.length > 0){
      data.elements.forEach((a: OvaadGraphicObject)=>{

        let elementArray: FormArray = graphicObjectForm.get('elements') as FormArray;

        elementArray.push(CreateGraphicElementForm(a));

      });
    }
  
    return graphicObjectForm as FormGroup;
  }