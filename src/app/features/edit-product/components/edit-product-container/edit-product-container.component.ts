import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductsFirebaseService} from "@app/core/services/products-firebase.service";
import {Product} from "@app/shared/interfaces/products.interface";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-edit-product-container',
  templateUrl: './edit-product-container.component.html',
  styleUrl: './edit-product-container.component.scss'
})
export class EditProductContainerComponent implements OnInit, OnDestroy {
  product: Product | undefined;
  subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private productsFirebaseService: ProductsFirebaseService,
              private router: Router) {
  }

  ngOnInit(): void {
    const productIdFromRoute = Number(
      this.route.snapshot.paramMap.get('productId')
    );

    this.subscription = this.productsFirebaseService.getProductByIdFromFirebase
    (productIdFromRoute).subscribe((productFromFirebase) => {
      this.product = productFromFirebase;
    })
  }

  onFormValuesChange(values: any) {
    this.product = {...this.product, ...values};
  }

  onSubmit() {
    if (this.product) {
      this.productsFirebaseService.upsertProductToFirebase(this.product);
    }
    this.router.navigate(['/shop']);
  }

  deleteProduct() {
    if (this.product) {
      this.productsFirebaseService.deleteProductFromFirebase(this.product);
    }
    this.router.navigate(['/shop']);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
