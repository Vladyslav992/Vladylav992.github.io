import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup} from '@angular/forms';
import {oneOfFieldsRequiredValidator} from "@app/core/validators/oneOfFieldsRequired.validator";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-delivery-date',
  templateUrl: './delivery-date.component.html',
  styleUrl: './delivery-date.component.scss',
})

export class DeliveryDateComponent implements OnInit, OnDestroy {
  todayDate = new Date();
  tomorrowDate = new Date(this.todayDate.getFullYear(), this.todayDate.getMonth(), this.todayDate.getDate() + 1,);
  deliveryDateForm: FormGroup;
  subscription: Subscription;
  showWarn: boolean = false;
  @Input() initialForm: any;
  @Output() subFormInitialized: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Output() changeStep = new EventEmitter<any>();

  constructor(private fb: FormBuilder, private oneOfFieldsRequiredValidator: oneOfFieldsRequiredValidator) {
  }

  ngOnInit(): void {

    this.deliveryDateForm = this.fb.group({
      deliveryDate: this.fb.group({
        predefinedDateOption: [''],
        customDate: [''],
      }),
    })

    const controlsArray = [
      this.deliveryDateForm.get('deliveryDate')?.get('predefinedDateOption') as AbstractControl,
      this.deliveryDateForm.get('deliveryDate')?.get('customDate') as AbstractControl
    ];

    this.deliveryDateForm.get('deliveryDate')?.setValidators
    (this.oneOfFieldsRequiredValidator.oneOfFieldsRequired(controlsArray));

    if (this.initialForm) {
      this.deliveryDateForm.get('deliveryDate')?.patchValue(this.initialForm);
    }

    const control = this.deliveryDateForm.get('deliveryDate');
    if (control) {
      this.subscription = control.valueChanges.subscribe(() => {
        this.showWarn = false;
      });
    }
  }

  doStepChange(direction: 'next' | 'prev') {
    if (direction === 'prev') {
      this.changeStep.emit(direction);
    }
    if (this.deliveryDateForm.valid) {
      this.changeStep.emit(direction);
    } else {
      this.showWarn = true;
    }
  }

  onRadioChange() {
    this.deliveryDateForm.get('deliveryDate')?.patchValue({customDate: null});
  }

  onCalendarChange() {
    this.deliveryDateForm.get('deliveryDate')?.patchValue({predefinedDateOption: null});
  }

  ngOnDestroy() {
    this.subFormInitialized.emit(this.deliveryDateForm.value);
    this.subscription?.unsubscribe();
  }
}
