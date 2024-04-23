import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

import {CartService} from '@app/core/services/cart.service';
import {ProductInCart} from '@app/shared/interfaces/productInCart.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent implements OnInit {
  items: ProductInCart[] = [];

  constructor(private cartService: CartService) {
  }

  get totalPrice() {
    let totalPrice = 0;
    this.items.forEach((item) => {
      totalPrice += (item.price - item.price * item.discount) * item.quantity;
    });
    this.cartService.saveToLocalStorage();
    return totalPrice;
  }

  ngOnInit(): void {
    this.cartService.items$.subscribe((items) => {
      this.items = items;
    });

    this.cartService.getFromLocalStorage();
  }

  clearCart() {
    this.cartService.clearCart();
  }

  increaseQuantity(item: ProductInCart) {
    this.cartService.increaseQuantity(item);
  }

  decreaseQuantity(item: ProductInCart) {
    this.cartService.decreaseQuantity(item);
  }

  deleteFromCart(item: ProductInCart) {
    this.cartService.deleteItemFromCart(item);
  }
}
