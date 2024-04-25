import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrl: './payment-method.component.scss',
})
export class PaymentMethodComponent implements OnInit, OnDestroy {
  paymentMethodForm: FormGroup;
  subscription: Subscription;
  showWarn: boolean = false;
  @Input() initialForm: any;
  @Output() subFormInitialized: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Output() changeStep = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.paymentMethodForm = this.fb.group({paymentMethod: ['', [Validators.required]],})

    if (this.initialForm) {
      this.paymentMethodForm.get('paymentMethod')?.setValue(this.initialForm);
    }

    const control = this.paymentMethodForm.get('paymentMethod');
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
    
    if (direction === 'next' && this.paymentMethodForm.valid) {
      this.changeStep.emit(direction);
    } else {
      this.showWarn = true;
    }
  }

  ngOnDestroy() {
    this.subFormInitialized.emit(this.paymentMethodForm.value);
    this.subscription?.unsubscribe();
  }
}
