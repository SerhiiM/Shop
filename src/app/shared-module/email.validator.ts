import { AbstractControl } from '@angular/forms';

export function ValidateEmail(control: AbstractControl) {
  if (!control.value.includes('gmail')) {
    return { validateEmail: true };
  }
  return null;
}
