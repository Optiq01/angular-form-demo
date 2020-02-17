import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ViewBoxParameters }                  from '@interfaces/interfaces';

export function CreateViewBoxForm(data?: ViewBoxParameters): FormGroup{
    return new FormGroup({
      x      :  new FormControl((data ? data.x      : ''), Validators.required),
      y      :  new FormControl((data ? data.y      : ''), Validators.required),
      width  :  new FormControl((data ? data.width  : ''), Validators.required),
      height :  new FormControl((data ? data.height : ''), Validators.required)
    }) as FormGroup;
  }