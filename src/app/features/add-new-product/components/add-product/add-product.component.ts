import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Product} from "@app/shared/interfaces/products.interface";
import {ProductsFirebaseService} from "@app/core/services/products-firebase.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent implements OnInit {
  newProductForm: FormGroup;
  todayDate = new Date();

  constructor(private fb: FormBuilder,
              private router: Router,
              private productsFirebaseService: ProductsFirebaseService) {
  }

  ngOnInit(): void {
    this.newProductForm = this.fb.group({
      id: [''],
      imgUrl: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      discount: ['', [Validators.required, Validators.min(0), Validators.max(1)]],
      main: [false],
      shop: ['', [Validators.required]],
      name: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      shipping: [null],
      discountUntil: [null],
      isNew: [true],
      color: ['', [Validators.required]],
      size: [[], [Validators.required]],
      review: [[]],
    })
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.newProductForm.get(controlName);
    return control ? control.invalid &&
      (control.dirty || control.touched) : false;
  }

  setRandomId(): void {
    this.newProductForm.get('id')?.setValue(Math.floor(Math.random() * 1000000));
  }

  onSubmit(): void {
    if (this.newProductForm.valid) {
      this.transformStringToArray('color');
      this.transformStringToArray('size');
      const product: Product = this.newProductForm.value;
      this.productsFirebaseService.addProductToFirebase(product);
      this.router.navigate(['/shop']);
    } else {
      console.log('Form is invalid')
    }
  }

  private transformStringToArray(controlName: string): void {
    const controlValue = this.newProductForm.get(controlName)?.value;
    const controlValueArray = controlValue.split(' ');
    this.newProductForm.get(controlName)?.setValue(controlValueArray)
  }
}
