import { Calculator } from '../Calculator.js';

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add', () => {
    it('should add two positive numbers', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    it('should add negative numbers', () => {
      expect(calculator.add(-2, -3)).toBe(-5);
    });

    it('should add zero', () => {
      expect(calculator.add(5, 0)).toBe(5);
    });

    it('should handle decimal numbers', () => {
      expect(calculator.add(1.5, 2.5)).toBe(4);
    });
  });

  describe('subtract', () => {
    it('should subtract two positive numbers', () => {
      expect(calculator.subtract(5, 3)).toBe(2);
    });

    it('should subtract negative numbers', () => {
      expect(calculator.subtract(-2, -3)).toBe(1);
    });

    it('should subtract zero', () => {
      expect(calculator.subtract(5, 0)).toBe(5);
    });

    it('should handle decimal numbers', () => {
      expect(calculator.subtract(5.5, 2.5)).toBe(3);
    });
  });

  describe('multiply', () => {
    it('should multiply two positive numbers', () => {
      expect(calculator.multiply(2, 3)).toBe(6);
    });

    it('should multiply negative numbers', () => {
      expect(calculator.multiply(-2, 3)).toBe(-6);
    });

    it('should multiply by zero', () => {
      expect(calculator.multiply(5, 0)).toBe(0);
    });

    it('should handle decimal numbers', () => {
      expect(calculator.multiply(1.5, 2)).toBe(3);
    });
  });

  describe('divide', () => {
    it('should divide two numbers', () => {
      expect(calculator.divide(6, 3)).toBe(2);
    });

    it('should return decimal when appropriate', () => {
      expect(calculator.divide(5, 2)).toBe(2.5);
    });

    it('should throw error when dividing by zero', () => {
      expect(() => calculator.divide(5, 0)).toThrow('Division by zero');
    });

    it('should handle negative numbers', () => {
      expect(calculator.divide(-6, 3)).toBe(-2);
    });
  });
});
