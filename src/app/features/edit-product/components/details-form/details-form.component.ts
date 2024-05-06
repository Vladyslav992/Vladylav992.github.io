import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Product} from "@app/shared/interfaces/products.interface";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrl: './details-form.component.scss'
})
export class DetailsFormComponent implements OnInit, OnDestroy {
  productDetailsGroup: FormGroup;
  subscription: Subscription;
  @Input() product: Product | undefined;
  @Output() formValuesChange = new EventEmitter()

  constructor(private fb: FormBuilder) {
  }


  ngOnInit(): void {
    this.productDetailsGroup = this.fb.group({
      imgUrl: [this.product?.imgUrl, [Validators.required]],
      shop: [this.product?.shop, [Validators.required]],
      name: [this.product?.name, [Validators.required]],
      description: [this.product?.description, [Validators.required, Validators.minLength(10)]],
      color: [this.product?.color, [Validators.required]],
      size: [this.product?.size, [Validators.required]],
    })

    this.subscription = this.productDetailsGroup
      .valueChanges.subscribe(values => {
        this.formValuesChange.emit(values);
      });
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.productDetailsGroup.get(controlName);
    return control ? control.invalid &&
      (control.dirty || control.touched) : false;
  }

  transformStringToArray(controlName: string): void {
    const controlValue = this.productDetailsGroup.get(controlName)?.value;

    if (typeof controlValue === 'string') {
      const controlValueArray = controlValue.split(',');
      this.productDetailsGroup.get(controlName)?.setValue(controlValueArray)
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
