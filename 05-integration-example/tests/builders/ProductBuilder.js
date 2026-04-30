import { Product } from '../../Product.js';

export class ProductBuilder {
  constructor() {
    this.id = 'PRODUCT-1';
    this.name = 'Test Product';
    this.price = 10;
    this.stock = 100;
  }

  validModel() {
    return this;
  }

  withId(id) {
    this.id = id;
    return this;
  }

  withName(name) {
    this.name = name;
    return this;
  }

  withPrice(price) {
    this.price = price;
    return this;
  }

  withStock(stock) {
    this.stock = stock;
    return this;
  }

  build() {
    return new Product(this.id, this.name, this.price, this.stock);
  }
}
