import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrl: './payment-method.component.scss',
})
export class PaymentMethodComponent implements OnInit, OnDestroy {
  paymentMethodForm: FormGroup;
  @Input() initialForm: any;
  @Output() subFormInitialized: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Output() changeStep = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.paymentMethodForm = this.fb.group({paymentMethod: [],})

    if (this.initialForm) {
      this.paymentMethodForm.get('paymentMethod')?.setValue(this.initialForm);
    }
  }

  doStepChange(direction: 'next' | 'prev') {
    this.changeStep.emit(direction);
  }

  ngOnDestroy() {
    this.subFormInitialized.emit(this.paymentMethodForm.value);
  }
}
