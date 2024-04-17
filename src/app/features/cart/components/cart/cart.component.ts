import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { CartService } from '@app/core/services/cart.service';
import { ProductToCart } from '@app/shared/interfaces/productToCart.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService) {}

  items: ProductToCart[] = [];

  ngOnInit(): void {
    this.cartService.items$.subscribe((items) => {
      this.items = items;
    });

    this.cartService.getFromLocalStorage();
  }

  get totalPrice() {
    let totalPrice = 0;
    this.items.forEach((item) => {
      totalPrice += (item.price - item.price * item.discount) * item.quantity;
    });
    this.cartService.saveToLocalStorage();
    return totalPrice;
  }

  clearCart() {
    this.cartService.clearCart();
  }

  increaseQuantity(item: ProductToCart) {
    this.cartService.increaseQuantity(item);
  }

  decreaseQuantity(item: ProductToCart) {
    this.cartService.decreaseQuantity(item);
  }

  deleteFromCart(item: ProductToCart) {
    this.cartService.deleteFromCart(item);
  }
}
