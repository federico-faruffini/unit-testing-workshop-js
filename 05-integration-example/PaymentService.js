export class PaymentService {
  async processPayment(amount, cardToken) {
    return await paymentGateway.charge(amount, cardToken);
  }
}