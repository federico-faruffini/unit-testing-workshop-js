import { Calculator } from '../Calculator.js';

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add', () => {
    it('should add two positive numbers', () => {
      // Arrange
      const a = 2;
      const b = 3;

      // Act
      const result = calculator.add(a, b);

      // Assert
      expect(result).toBe(5);
    });

    it('should add negative numbers', () => {
      // Arrange
      const a = -2;
      const b = -3;

      // Act
      const result = calculator.add(a, b);

      // Assert
      expect(result).toBe(-5);
    });

    it('should add zero', () => {
      // Arrange
      const a = 5;
      const b = 0;

      // Act
      const result = calculator.add(a, b);

      // Assert
      expect(result).toBe(5);
    });

    it('should handle decimal numbers', () => {
      // Arrange
      const a = 1.5;
      const b = 2.5;

      // Act
      const result = calculator.add(a, b);

      // Assert
      expect(result).toBe(4);
    });
  });

  describe('subtract', () => {
    it('should subtract two positive numbers', () => {
      // Arrange
      const a = 5;
      const b = 3;

      // Act
      const result = calculator.subtract(a, b);

      // Assert
      expect(result).toBe(2);
    });

    it('should subtract negative numbers', () => {
      // Arrange
      const a = -2;
      const b = -3;

      // Act
      const result = calculator.subtract(a, b);

      // Assert
      expect(result).toBe(1);
    });

    it('should subtract zero', () => {
      // Arrange
      const a = 5;
      const b = 0;

      // Act
      const result = calculator.subtract(a, b);

      // Assert
      expect(result).toBe(5);
    });

    it('should handle decimal numbers', () => {
      // Arrange
      const a = 5.5;
      const b = 2.5;

      // Act
      const result = calculator.subtract(a, b);

      // Assert
      expect(result).toBe(3);
    });
  });

  describe('multiply', () => {
    it('should multiply two positive numbers', () => {
      // Arrange
      const a = 2;
      const b = 3;

      // Act
      const result = calculator.multiply(a, b);

      // Assert
      expect(result).toBe(6);
    });

    it('should multiply negative numbers', () => {
      // Arrange
      const a = -2;
      const b = 3;

      // Act
      const result = calculator.multiply(a, b);

      // Assert
      expect(result).toBe(-6);
    });

    it('should multiply by zero', () => {
      // Arrange
      const a = 5;
      const b = 0;

      // Act
      const result = calculator.multiply(a, b);

      // Assert
      expect(result).toBe(0);
    });

    it('should handle decimal numbers', () => {
      // Arrange
      const a = 1.5;
      const b = 2;

      // Act
      const result = calculator.multiply(a, b);

      // Assert
      expect(result).toBe(3);
    });
  });

  describe('divide', () => {
    it('should divide two numbers', () => {
      // Arrange
      const dividend = 6;
      const divisor = 3;

      // Act
      const result = calculator.divide(dividend, divisor);

      // Assert
      expect(result).toBe(2);
    });

    it('should return decimal when appropriate', () => {
      // Arrange
      const dividend = 5;
      const divisor = 2;

      // Act
      const result = calculator.divide(dividend, divisor);

      // Assert
      expect(result).toBe(2.5);
    });

    it('should throw error when dividing by zero', () => {
      // Arrange
      const dividend = 5;
      const divisor = 0;

      // Act
      const action = () => calculator.divide(dividend, divisor);

      // Assert
      expect(action).toThrow('Division by zero');
    });

    it('should handle negative numbers', () => {
      // Arrange
      const dividend = -6;
      const divisor = 3;

      // Act
      const result = calculator.divide(dividend, divisor);

      // Assert
      expect(result).toBe(-2);
    });
  });

  describe('factorial', () => {
    it('should return 1 for factorial of 0', () => {
      // Arrange
      
      // Act

      // Assert
    });

    it('should return 1 for factorial of 1', () => {});

    it('should return correct factorial for a positive integer', () => {});
    
    it('should throw error for negative input', () => {});

  });

});
