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

  factorial(n) {
    if (n < 0) {
      throw new Error('Cannot calculate factorial of a negative number');
    }

    if (n === 0 || n === 1) {
      return 1;
    }

    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    
    return result;
  }
}
