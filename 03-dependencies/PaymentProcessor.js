export class Logger {
  info(message) {
    throw new Error('Must be implemented');
  }

  error(message) {
    throw new Error('Must be implemented');
  }

  warn(message) {
    throw new Error('Must be implemented');
  }
}

export class PaymentProcessor {
  constructor(logger) {
    this.logger = logger;
    this.transactions = [];
  }

  processPayment(amount, cardToken) {
    if (amount <= 0) {
      this.logger.error(`Invalid payment amount: ${amount}`);
      throw new Error('Amount must be positive');
    }

    if (!cardToken) {
      this.logger.error('Missing card token');
      throw new Error('Card token required');
    }

    const transactionId = `TXN-${Date.now()}`;
    this.transactions.push({ id: transactionId, amount, status: 'success' });
    
    this.logger.info(`Payment processed: ${amount}€ (ID: ${transactionId})`);
    return transactionId;
  }

  refund(transactionId) {
    const transaction = this.transactions.find(t => t.id === transactionId);
    
    if (!transaction) {
      this.logger.warn(`Refund requested for unknown transaction: ${transactionId}`);
      throw new Error('Transaction not found');
    }

    transaction.status = 'refunded';
    this.logger.info(`Refund processed for ${transactionId}`);
  }

  getTransactionCount() {
    return this.transactions.length;
  }
}
