import { Cart } from '../../Cart.js';
import { ProductBuilder } from '../ProductBuilder.js';

export class CartBuilder {
  constructor() {
    this.items = [
      { product: new ProductBuilder().build(), quantity: 1 },
    ];
  }

  validModel() {
    return this;
  }

  empty() {
    this.items = [];
    return this;
  }

  withProduct(product, quantity = 1) {
    this.items.push({ product, quantity });
    return this;
  }

  withItems(items) {
    this.items = items;
    return this;
  }

  build() {
    const cart = new Cart();

    for (const item of this.items) {
      cart.addProduct(item.product, item.quantity);
    }

    return cart;
  }
}
