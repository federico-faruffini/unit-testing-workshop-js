import { Cart } from './Cart.js';
import { Order } from './Order.js';
import { Product } from './Product.js';

export class OrderService {
  constructor(paymentService, notificationService) {
    this.paymentService = paymentService;
    this.notificationService = notificationService;
    this.orders = [];
  }

  async placeOrder(userId, cart, cardToken) {
    if (cart.isEmpty()) {
      throw new Error('Cart is empty');
    }

    const amount = cart.getTotal();
    
    await this.paymentService.processPayment(amount, cardToken);
    
    const order = new Order(
      cart.id, 
      userId, 
      amount, 
      cart.items, 
      'confirmed', new Date());
    
    this.orders.push(order);

    try {
      await this.notificationService.sendOrderConfirmation(userId, order.orderId, amount);
    } catch (error) {
      console.error('Failed to send notification:', error);
    }

    cart.clear();
    
    return { orderId: order.orderId, amount, status: 'confirmed' };
  }

  getOrder(orderId) {
    return this.orders.find(o => o.orderId === orderId);
  }

  getUserOrders(userId) {
    return this.orders.filter(o => o.userId === userId);
  }

  cancelOrder(orderId) {
    const order = this.getOrder(orderId);
    if (!order) {
      throw new Error('Order not found');
    }

    return order.cancel();
  }
}

export { Cart, Order, Product };
