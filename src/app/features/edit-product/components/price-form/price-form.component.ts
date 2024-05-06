import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Product} from "@app/shared/interfaces/products.interface";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-price-form',
  templateUrl: './price-form.component.html',
  styleUrl: './price-form.component.scss'
})
export class PriceFormComponent implements OnInit, OnDestroy {
  productPriceGroup: FormGroup;
  todayDate = new Date();
  subscription: Subscription;
  @Input() product: Product | undefined;
  @Output() formValuesChange = new EventEmitter()


  constructor(private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.productPriceGroup = this.fb.group({
      price: [this.product?.price, [Validators.required, Validators.pattern('^[0-9]*$')]],
      discount: [this.product?.discount, [Validators.required, Validators.min(0), Validators.max(1)]],
      shipping: [this.product?.shipping],
      discountUntil: [this.transformDateForInput(this.product?.discountUntil)],
    })

    this.subscription = this.productPriceGroup.valueChanges.subscribe(values => {
      this.formValuesChange.emit(values);
    });
  }


  isControlInvalid(controlName: string): boolean {
    const control = this.productPriceGroup.get(controlName);
    return control ? control.invalid &&
      (control.dirty || control.touched) : false;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private transformDateForInput(date: string | undefined) {
    return date ? date.split('T')[0] : null
  }

}
