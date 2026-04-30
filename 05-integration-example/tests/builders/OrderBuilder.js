import { Order } from '../../Order.js';
import { ProductBuilder } from './ProductBuilder.js';

export class OrderBuilder {
  constructor() {
    const product = new ProductBuilder().build();

    this.orderId = 'ORDER-1';
    this.userId = 'user-1';
    this.products = [
      {
        product,
        quantity: 1,
      },
    ];
    this.amount = product.price;
    this.status = 'confirmed';
    this.createdAt = new Date('0001-01-01T00:00:00.000Z');
  }

  validModel() {
    return this;
  }

  withOrderId(orderId) {
    this.orderId = orderId;
    return this;
  }

  withUserId(userId) {
    this.userId = userId;
    return this;
  }

  withProducts(products) {
    this.products = products.map(item => ({ ...item }));
    
    this.amount = this.products.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0,
    );
    return this;
  }

  withAmount(amount) {
    this.amount = amount;
    return this;
  }

  withCreatedAt(createdAt) {
    this.createdAt = createdAt;
    return this;
  }

  cancelled() {
    this.status = 'cancelled';
    return this;
  }

  build() {
    return new Order(this.orderId, this.userId, this.amount, this.products);
  }
}