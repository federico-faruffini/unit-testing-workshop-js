export class Order {
  constructor(orderId, userId, amount, products) {
    this.orderId = orderId;
    this.userId = userId;
    this.amount = amount;
    this.products = products;
    this.status = '';
  }

  cancel() {
    this.status = 'cancelled';
  }
}