import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CartService} from "@app/core/services/cart.service";

@Component({
  selector: 'app-catalog-dropdown',
  templateUrl: './catalog-dropdown.component.html',
  styleUrl: './catalog-dropdown.component.scss',
})
export class CatalogDropdownComponent implements OnInit, OnDestroy {
  items$ = this.cartService.items$;
  productNamesForm: FormGroup;
  @Input() initialForm: any;
  @Output() subFormInitialized: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Output() changeStep = new EventEmitter<'next' | 'prev'>();

  constructor(private cartService: CartService, private fb: FormBuilder) {
  }

  get productNames(): string {
    if (!this.productNamesForm.get('productNames')?.value) {
      return '';
    }
    return this.productNamesForm.get('productNames')?.value.join(', ');
  }

  ngOnInit(): void {
    this.productNamesForm = this.fb.group({productNames: ['', [Validators.required]],})

    if (this.initialForm) {
      this.productNamesForm.get('productNames')?.setValue(this.initialForm);
    }
  }

  isCatalogInvalid(): boolean {
    const controlProducts = this.productNamesForm.get('productNames');
    return controlProducts ? controlProducts.invalid &&
      (controlProducts.dirty || controlProducts.touched) : false;
  }

  doStepChange(direction: 'next') {
    if (this.productNamesForm.valid) {
      this.changeStep.emit(direction);
    }
  }

  ngOnDestroy() {
    this.subFormInitialized.emit(this.productNamesForm.value);
  }
}
