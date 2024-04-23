import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductsService} from '@app/core/services/products/products.service';
import {Product} from '@app/shared/interfaces/products.interface';
import {CartService} from '@app/core/services/cart.service';
import {ProductInCart} from '@app/shared/interfaces/productInCart.interface';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  descriptionHidden: boolean = true;
  linkText: string = 'Read more';
  color: string = '';
  size: string = '';
  quantity: number = 1;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private cartService: CartService
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

    this.product = this.productService.getProductById(productIdFromRoute);
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
