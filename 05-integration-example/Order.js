export class Order {
  constructor(orderId, userId, amount, products, status = '', createdAt = null) {
    this.orderId = orderId;
    this.userId = userId;
    this.amount = amount;
    this.products = products;
    this.status = status;
    this.createdAt = createdAt;
  }

  cancel() {
    this.status = 'cancelled';
  }
}