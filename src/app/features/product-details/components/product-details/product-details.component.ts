import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '@app/core/services/products/products.service';
import { Product } from '@app/shared/interfaces/products.interface';
import { CartService } from '@app/core/services/cart.service';
import { ProductToCart } from '@app/shared/interfaces/productToCart.interface';

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

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const productIdFromRoute = Number(
      this.route.snapshot.paramMap.get('productId')
    );

    this.product = this.productService.getProductById(productIdFromRoute);
  }

  getAverageRating(product: Product): number {
    let averageRating = 0;

    product.review.forEach((review) => {
      averageRating += review.rating;
    });
    averageRating = Math.ceil(averageRating / product.review.length);
    return averageRating;
  }

  toggleDescriptionVisibility() {
    this.descriptionHidden = !this.descriptionHidden;
    this.linkText = this.descriptionHidden ? 'Read more' : 'Read less';
  }

  color: string = '';
  size: string = '';
  quantity: number = 1;
  addToCart() {
    if (this.product) {
      const itemToCart: ProductToCart = {
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

      const itemInCart = this.cartService.getItemById(itemToCart.id);
      if (itemInCart) {
        itemInCart.quantity += this.quantity;
      } else {
        this.cartService.addToCart(itemToCart);
      }
    }
    this.cartService.saveToLocalStorage();
  }
}
