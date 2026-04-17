export class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(dividend, divisor) {
    if (divisor === 0) {
      throw new Error('Division by zero');
    }
    return dividend / divisor;
  }
}
