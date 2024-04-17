import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../../../../shared/interfaces/products.interface';
import { ProductsService } from '../../../../core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit, OnDestroy {
  constructor(private productService: ProductsService) {}

  productsList: Product[];
  subscription: Subscription;

  ngOnInit(): void {
    this.subscription = this.productService
      .getProducts()
      .subscribe((products: Product[]) => {
        this.productsList = products;
      });
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
