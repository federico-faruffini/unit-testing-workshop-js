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
    
    const paymentResult = await this.paymentService.processPayment(amount, cardToken);
    
    const orderId = `ORDER-${Date.now()}`;
    const order = {
      orderId,
      userId,
      amount,
      items: [...cart.items],
      status: 'confirmed',
      createdAt: new Date()
    };
    
    this.orders.push(order);

    try {
      await this.notificationService.sendOrderConfirmation(userId, orderId, amount);
    } catch (error) {
      console.error('Failed to send notification:', error);
    }

    cart.clear();
    
    return { orderId, amount, status: 'confirmed' };
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

    order.status = 'cancelled';
    
    return order;
  }
}
