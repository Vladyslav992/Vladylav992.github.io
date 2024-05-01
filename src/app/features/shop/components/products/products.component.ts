import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from '../../../../shared/interfaces/products.interface';
import {ProductsFirebaseService} from "@app/core/services/products-firebase.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit, OnDestroy {
  productsList: Product[];
  subscription: Subscription;

  constructor(private changeDetector: ChangeDetectorRef,
              private productsFirebaseService: ProductsFirebaseService) {
  }

  priceWithDiscount(product: Product) {
    return product.price - product.price * product.discount;
  }

  ngOnInit(): void {
    this.productsFirebaseService.addProductsToFirebase();

    this.subscription = this.productsFirebaseService.getProductsFromFirebase()
      .subscribe((productsFromFirebase) => {
        this.productsList = productsFromFirebase;
        this.changeDetector.detectChanges();
      })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getDiscountClass(discount: number) {
    if (discount === 0.7) {
      return 'products__card_red';
    } else if (discount === 0.6) {
      return 'products__card_pink';
    } else if (discount === 0.5) {
      return 'products__card_orange';
    } else {
      return '';
    }
  }
}
