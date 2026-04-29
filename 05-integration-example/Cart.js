export class Cart {
  constructor() {
    this.items = [];
  }

  addProduct(product, quantity) {
    const existing = this.items.find(i => i.product.id === product.id);
    if (existing) {
      existing.quantity += quantity;
    } else {
      this.items.push({ product, quantity });
    }
  }

  getTotal() {
    let total = 0;

    for (const item of this.items) {
      total += item.product.price * item.quantity;
    }

    return total;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  clear() {
    this.items = [];
  }
}