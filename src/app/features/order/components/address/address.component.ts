import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {existingCountryValidator} from "@app/core/validators/country.validator";


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss',
})
export class AddressComponent implements OnInit, OnDestroy {
  addressForm: FormGroup;
  @Input() initialForm: any;
  @Output() subFormInitialized: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Output() changeStep = new EventEmitter<any>();

  constructor(private fb: FormBuilder, private http: HttpClient,
              private existingCountryValidator: existingCountryValidator) {
  }

  ngOnInit(): void {
    this.addressForm = this.fb.group({
      location: this.fb.group({
        country: ['', [Validators.required, Validators.minLength(2)],
          this.existingCountryValidator.countryExist(this.http)],
        city: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
        address: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      })
    })

    if (this.initialForm) {
      this.addressForm.patchValue({
        location: {
          country: this.initialForm.country,
          city: this.initialForm.city,
          address: this.initialForm.address
        }
      });
    }
  }

  isCountryInvalid(): boolean {
    const controlCountry = this.addressForm.get('location.country');
    return controlCountry ? controlCountry.hasError('countryNotExist') : false;
  }

  isCityInvalid(): boolean {
    const controlCity = this.addressForm.get('location.city');
    return controlCity ? controlCity.invalid &&
      (controlCity.dirty || controlCity.touched) : false;
  }

  isAddressInvalid(): boolean {
    const controlAddress = this.addressForm.get('location.address');
    return controlAddress ? controlAddress.invalid &&
      (controlAddress.dirty || controlAddress.touched) : false;
  }

  doStepChange(direction: 'next' | 'prev') {
    if (direction === 'prev') {
      this.changeStep.emit(direction);
    }
    if (this.addressForm.valid) {
      this.changeStep.emit(direction);
    }
  }

  ngOnDestroy() {
    this.subFormInitialized.emit(this.addressForm.value);
  }
}


