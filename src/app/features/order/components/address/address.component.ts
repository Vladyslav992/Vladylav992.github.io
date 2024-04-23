import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';


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

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.addressForm = this.fb.group({
      location: this.fb.group({
        country: [''],
        city: [''],
        address: [''],
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

  doStepChange(direction: 'next' | 'prev') {
    this.changeStep.emit(direction);
  }

  ngOnDestroy() {
    this.subFormInitialized.emit(this.addressForm.value);
  }
}


