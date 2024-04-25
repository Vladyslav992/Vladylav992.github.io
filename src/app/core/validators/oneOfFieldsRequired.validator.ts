import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class oneOfFieldsRequiredValidator {
  oneOfFieldsRequired(controls: AbstractControl[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const isValid = controls.some(control => control.value);

      return isValid ? null : {allControlsInvalid: true};
    };
  }
}
