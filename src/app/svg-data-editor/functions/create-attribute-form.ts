import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OvaadGraphicAttribute }              from '../../interfaces';

export function CreateAttributeForm(data?: OvaadGraphicAttribute): FormGroup{
    return new FormGroup({
      attribute : new FormControl((data ? data.attribute : ''), Validators.required),
      setting   : new FormControl((data ? data.setting   : ''), Validators.required)
    }) as FormGroup;
  }