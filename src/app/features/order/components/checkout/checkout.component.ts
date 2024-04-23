import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent {
  @Input() orderForm: any;
  @Output() changeStep = new EventEmitter<'next' | 'prev'>();

  constructor() {
  }

  get productNames(): string {
    if (!this.orderForm.productNames) {
      return 'You have not selected any products';
    } else {
      return this.orderForm.productNames.join(', ');
    }
  }

  get country(): string {
    if (!this.orderForm.location) {
      return 'You have not selected location';
    } else {
      return this.orderForm.location.country;
    }
  }

  get city(): string {
    if (!this.orderForm.location) {
      return 'You have not selected location';
    } else {
      return this.orderForm.location.city;
    }
  }

  get address(): string {
    if (!this.orderForm.location) {
      return 'You have not selected location';
    } else {
      return this.orderForm.location.address;
    }
  }


  get paymentMethod(): string {
    if (!this.orderForm.paymentMethod) {
      return 'You have not selected payment method';
    } else {
      return this.orderForm.paymentMethod;
    }
  }
  
  get deliveryDate(): any {
    if (!this.orderForm.deliveryDate) {
      return 'You have not selected delivery date';
    } else if (this.orderForm.deliveryDate.predefinedDateOption) {
      return String(this.orderForm.deliveryDate.predefinedDateOption);
    } else if (this.orderForm.deliveryDate.customDate) {
      return String(this.orderForm.deliveryDate.customDate);
    }
  }

  doStepChange(direction: 'prev') {
    this.changeStep.emit(direction);
  }

  onSubmit() {
    console.log(this.orderForm);
  }
}
