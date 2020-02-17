import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OvaadSvgStyleProperty }              from '../../interfaces';

export function CreateStylePropertyForm(data?: OvaadSvgStyleProperty): FormGroup{
    return new FormGroup({
      property : new FormControl((data ? data.property : ''), Validators.required),
      setting  : new FormControl((data ? data.setting  : ''), Validators.required)
    }) as FormGroup;
  }