import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-delivery-date',
  templateUrl: './delivery-date.component.html',
  styleUrl: './delivery-date.component.scss',
})

export class DeliveryDateComponent implements OnInit, OnDestroy {
  todayDate = new Date();
  tomorrowDate = new Date(this.todayDate.getFullYear(), this.todayDate.getMonth(), this.todayDate.getDate() + 1,);
  deliveryDateForm: FormGroup;
  @Input() initialForm: any;
  @Output() subFormInitialized: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Output() changeStep = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.deliveryDateForm = this.fb.group({
      deliveryDate: this.fb.group({
        predefinedDateOption: [],
        customDate: [],
      }),
    });
    if (this.initialForm) {
      this.deliveryDateForm.get('deliveryDate')?.patchValue(this.initialForm);
    }
  }

  doStepChange(direction: 'next' | 'prev') {
    this.changeStep.emit(direction);
  }

  onRadioChange() {
    this.deliveryDateForm.get('deliveryDate')?.patchValue({customDate: null});
  }

  onCalendarChange() {
    this.deliveryDateForm.get('deliveryDate')?.patchValue({predefinedDateOption: null});
  }

  ngOnDestroy() {
    this.subFormInitialized.emit(this.deliveryDateForm.value);
  }
}
