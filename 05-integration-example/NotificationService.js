export class NotificationService {
  async sendOrderConfirmation(userId, orderId, amount) {
    await notificationApi.sendOrderConfirmation(userId, orderId, amount);
  }
}