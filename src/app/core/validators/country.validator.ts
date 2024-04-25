import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import {debounceTime, Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class existingCountryValidator {
  countryExist(http: HttpClient): ValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      if (!control.value) {
        return of(null);
      }
      return http.get<any>(`https://restcountries.com/v3.1/name/${control.value}`).pipe(
        debounceTime(300),
        map(response => {
          return Array.isArray(response) && response.length > 0 ? null : {countryNotExist: true};
        }),
        catchError(() => of({countryNotExist: true}))
      );
    };
  }
}

