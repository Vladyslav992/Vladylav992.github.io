import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from '@app/shared/interfaces/products.interface';
import {CartService} from '@app/core/services/cart.service';
import {ProductInCart} from '@app/shared/interfaces/productInCart.interface';
import {ProductsFirebaseService} from "@app/core/services/products-firebase.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  product: Product | undefined;
  descriptionHidden: boolean = true;
  linkText: string = 'Read more';
  color: string = '';
  size: string = '';
  quantity: number = 1;
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private productsFirebaseService: ProductsFirebaseService,
    private changeDetector: ChangeDetectorRef,
  ) {
  }

  get priceWithDiscount() {
    const product = this.product ?? {price: 0, discount: 0};
    return product.price - product.price * product.discount;
  }

  get averageRating() {
    let averageRating = 0;
    const product = this.product ?? {review: []};

    product.review.forEach((review) => {
      averageRating += review.rating;
    });
    averageRating = Math.ceil(averageRating / product.review.length);
    return averageRating;
  }

  ngOnInit(): void {
    const productIdFromRoute = Number(
      this.route.snapshot.paramMap.get('productId')
    );

    this.subscription = this.productsFirebaseService.getProductByIdFromFirebase
    (productIdFromRoute).subscribe((productFromFirebase) => {
      this.product = productFromFirebase;
      this.changeDetector.detectChanges();
    })
  }

  toggleDescriptionVisibility() {
    this.descriptionHidden = !this.descriptionHidden;
    this.linkText = this.descriptionHidden ? 'Read more' : 'Read less';
  }

  addToCart() {
    if (!this.product) {
      return;
    }

    const productToCart: ProductInCart = this.createProductInCart();
    this.updateCart(productToCart);
    this.cartService.saveToLocalStorage();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private createProductInCart(): ProductInCart {
    if (!this.product) {
      throw new Error('Product is undefined');
    }

    return {
      id: this.product.id,
      name: this.product.name,
      description: this.product.description,
      price: this.product.price,
      discount: this.product.discount,
      imgUrl: this.product.imgUrl,
      color: this.color,
      size: this.size,
      quantity: this.quantity,
    };
  }

  private updateCart(productToCart: ProductInCart) {
    const productInCart = this.cartService.getItemById(productToCart.id);

    if (productInCart) {
      productInCart.quantity += this.quantity;
    } else {
      this.cartService.addToCart(productToCart);
    }
  }

}
