import { CoffeeOrder } from '../CoffeeOrder.js';
import { CoffeePriceCalculator } from '../CoffeePriceCalculator.js';

describe('CoffeePriceCalculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new CoffeePriceCalculator();
  });

  describe('Basic price calculation', () => {
    it('should calculate price for a basic espresso', () => {
      const order = new CoffeeOrder({
        size: 'medium',
        coffeeType: 'espresso',
        milk: 'none',
        shots: 1,
        temperature: 'hot',
        syrup: null,
        hasWhippedCream: false,
        hasChocolatePowder: false,
        isExtraHot: false,
        isVegan: false,
      });
      expect(calculator.calculatePrice(order)).toBe(2.0);
    });

    it('should calculate price for different coffee types', () => {
      const espresso = new CoffeeOrder({ coffeeType: 'espresso', size: 'medium', milk: 'none', shots: 1, temperature: 'hot', syrup: null, hasWhippedCream: false, hasChocolatePowder: false, isExtraHot: false, isVegan: false });
      const cappuccino = new CoffeeOrder({ coffeeType: 'cappuccino', size: 'medium', milk: 'none', shots: 1, temperature: 'hot', syrup: null, hasWhippedCream: false, hasChocolatePowder: false, isExtraHot: false, isVegan: false });
      const latte = new CoffeeOrder({ coffeeType: 'latte', size: 'medium', milk: 'none', shots: 1, temperature: 'hot', syrup: null, hasWhippedCream: false, hasChocolatePowder: false, isExtraHot: false, isVegan: false });
      const americano = new CoffeeOrder({ coffeeType: 'americano', size: 'medium', milk: 'none', shots: 1, temperature: 'hot', syrup: null, hasWhippedCream: false, hasChocolatePowder: false, isExtraHot: false, isVegan: false });
      const macchiato = new CoffeeOrder({ coffeeType: 'macchiato', size: 'medium', milk: 'none', shots: 1, temperature: 'hot', syrup: null, hasWhippedCream: false, hasChocolatePowder: false, isExtraHot: false, isVegan: false });

      expect(calculator.calculatePrice(espresso)).toBe(2.0);
      expect(calculator.calculatePrice(cappuccino)).toBe(3.0);
      expect(calculator.calculatePrice(latte)).toBe(3.0);
      expect(calculator.calculatePrice(americano)).toBe(2.5);
      expect(calculator.calculatePrice(macchiato)).toBe(3.5);
    });
  });

  describe('Size multiplier', () => {
    it('should apply size multiplier to price', () => {
      const smallOrder = new CoffeeOrder({
        size: 'small',
        coffeeType: 'espresso',
        milk: 'none',
        shots: 1,
        temperature: 'hot',
        syrup: null,
        hasWhippedCream: false,
        hasChocolatePowder: false,
        isExtraHot: false,
        isVegan: false,
      });
      const mediumOrder = new CoffeeOrder({
        size: 'medium',
        coffeeType: 'espresso',
        milk: 'none',
        shots: 1,
        temperature: 'hot',
        syrup: null,
        hasWhippedCream: false,
        hasChocolatePowder: false,
        isExtraHot: false,
        isVegan: false,
      });
      const largeOrder = new CoffeeOrder({
        size: 'large',
        coffeeType: 'espresso',
        milk: 'none',
        shots: 1,
        temperature: 'hot',
        syrup: null,
        hasWhippedCream: false,
        hasChocolatePowder: false,
        isExtraHot: false,
        isVegan: false,
      });

      expect(calculator.calculatePrice(smallOrder)).toBe(1.8);
      expect(calculator.calculatePrice(mediumOrder)).toBe(2.0);
      expect(calculator.calculatePrice(largeOrder)).toBe(2.4);
    });
  });

  describe('Extra shots', () => {
    it('should add price for extra shots', () => {
      const singleShot = new CoffeeOrder({
        size: 'medium',
        coffeeType: 'espresso',
        milk: 'none',
        shots: 1,
        temperature: 'hot',
        syrup: null,
        hasWhippedCream: false,
        hasChocolatePowder: false,
        isExtraHot: false,
        isVegan: false,
      });
      const doubleShot = new CoffeeOrder({
        size: 'medium',
        coffeeType: 'espresso',
        milk: 'none',
        shots: 2,
        temperature: 'hot',
        syrup: null,
        hasWhippedCream: false,
        hasChocolatePowder: false,
        isExtraHot: false,
        isVegan: false,
      });
      const tripleShot = new CoffeeOrder({
        size: 'medium',
        coffeeType: 'espresso',
        milk: 'none',
        shots: 3,
        temperature: 'hot',
        syrup: null,
        hasWhippedCream: false,
        hasChocolatePowder: false,
        isExtraHot: false,
        isVegan: false,
      });

      expect(calculator.calculatePrice(singleShot)).toBe(2.0);
      expect(calculator.calculatePrice(doubleShot)).toBe(2.75);
      expect(calculator.calculatePrice(tripleShot)).toBe(3.5);
    });
  });

  describe('Milk options', () => {
    it('should add price for milk options', () => {
      const noMilk = new CoffeeOrder({
        size: 'medium',
        coffeeType: 'espresso',
        milk: 'none',
        shots: 1,
        temperature: 'hot',
        syrup: null,
        hasWhippedCream: false,
        hasChocolatePowder: false,
        isExtraHot: false,
        isVegan: false,
      });
      const wholeMilk = new CoffeeOrder({
        size: 'medium',
        coffeeType: 'espresso',
        milk: 'whole',
        shots: 1,
        temperature: 'hot',
        syrup: null,
        hasWhippedCream: false,
        hasChocolatePowder: false,
        isExtraHot: false,
        isVegan: false,
      });
      const skimMilk = new CoffeeOrder({
        size: 'medium',
        coffeeType: 'espresso',
        milk: 'skim',
        shots: 1,
        temperature: 'hot',
        syrup: null,
        hasWhippedCream: false,
        hasChocolatePowder: false,
        isExtraHot: false,
        isVegan: false,
      });
      const oatMilk = new CoffeeOrder({
        size: 'medium',
        coffeeType: 'espresso',
        milk: 'oat',
        shots: 1,
        temperature: 'hot',
        syrup: null,
        hasWhippedCream: false,
        hasChocolatePowder: false,
        isExtraHot: false,
        isVegan: false,
      });
      const almondMilk = new CoffeeOrder({
        size: 'medium',
        coffeeType: 'espresso',
        milk: 'almond',
        shots: 1,
        temperature: 'hot',
        syrup: null,
        hasWhippedCream: false,
        hasChocolatePowder: false,
        isExtraHot: false,
        isVegan: false,
      });

      expect(calculator.calculatePrice(noMilk)).toBe(2.0);
      expect(calculator.calculatePrice(wholeMilk)).toBe(2.5);
      expect(calculator.calculatePrice(skimMilk)).toBe(2.5);
      expect(calculator.calculatePrice(oatMilk)).toBe(2.75);
      expect(calculator.calculatePrice(almondMilk)).toBe(2.75);
    });
  });

  describe('Toppings and extras', () => {
    it('should add price for whipped cream', () => {
      const withoutWhippedCream = new CoffeeOrder({
        size: 'medium',
        coffeeType: 'espresso',
        milk: 'none',
        shots: 1,
        temperature: 'hot',
        syrup: null,
        hasWhippedCream: false,
        hasChocolatePowder: false,
        isExtraHot: false,
        isVegan: false,
      });
      const withWhippedCream = new CoffeeOrder({
        size: 'medium',
        coffeeType: 'espresso',
        milk: 'none',
        shots: 1,
        temperature: 'hot',
        syrup: null,
        hasWhippedCream: true,
        hasChocolatePowder: false,
        isExtraHot: false,
        isVegan: false,
      });

      expect(calculator.calculatePrice(withoutWhippedCream)).toBe(2.0);
      expect(calculator.calculatePrice(withWhippedCream)).toBe(2.75);
    });

    it('should add price for chocolate powder', () => {
      const withoutChocolate = new CoffeeOrder({
        size: 'medium',
        coffeeType: 'espresso',
        milk: 'none',
        shots: 1,
        temperature: 'hot',
        syrup: null,
        hasWhippedCream: false,
        hasChocolatePowder: false,
        isExtraHot: false,
        isVegan: false,
      });
      const withChocolate = new CoffeeOrder({
        size: 'medium',
        coffeeType: 'espresso',
        milk: 'none',
        shots: 1,
        temperature: 'hot',
        syrup: null,
        hasWhippedCream: false,
        hasChocolatePowder: true,
        isExtraHot: false,
        isVegan: false,
      });

      expect(calculator.calculatePrice(withoutChocolate)).toBe(2.0);
      expect(calculator.calculatePrice(withChocolate)).toBe(2.5);
    });

    it('should add price for syrup', () => {
      const withoutSyrup = new CoffeeOrder({
        size: 'medium',
        coffeeType: 'espresso',
        milk: 'none',
        shots: 1,
        temperature: 'hot',
        syrup: null,
        hasWhippedCream: false,
        hasChocolatePowder: false,
        isExtraHot: false,
        isVegan: false,
      });
      const withSyrup = new CoffeeOrder({
        size: 'medium',
        coffeeType: 'espresso',
        milk: 'none',
        shots: 1,
        temperature: 'hot',
        syrup: 'vanilla',
        hasWhippedCream: false,
        hasChocolatePowder: false,
        isExtraHot: false,
        isVegan: false,
      });

      expect(calculator.calculatePrice(withoutSyrup)).toBe(2.0);
      expect(calculator.calculatePrice(withSyrup)).toBe(2.5);
    });

    it('should add price for extra hot', () => {
      const regularHot = new CoffeeOrder({
        size: 'medium',
        coffeeType: 'espresso',
        milk: 'none',
        shots: 1,
        temperature: 'hot',
        syrup: null,
        hasWhippedCream: false,
        hasChocolatePowder: false,
        isExtraHot: false,
        isVegan: false,
      });
      const extraHot = new CoffeeOrder({
        size: 'medium',
        coffeeType: 'espresso',
        milk: 'none',
        shots: 1,
        temperature: 'hot',
        syrup: null,
        hasWhippedCream: false,
        hasChocolatePowder: false,
        isExtraHot: true,
        isVegan: false,
      });

      expect(calculator.calculatePrice(regularHot)).toBe(2.0);
      expect(calculator.calculatePrice(extraHot)).toBe(2.25);
    });

    it('should calculate price for multiple toppings', () => {
      const deluxe = new CoffeeOrder({
        size: 'medium',
        coffeeType: 'espresso',
        milk: 'none',
        shots: 1,
        temperature: 'hot',
        syrup: null,
        hasWhippedCream: true,
        hasChocolatePowder: true,
        isExtraHot: true,
        isVegan: false,
      });

      expect(calculator.calculatePrice(deluxe)).toBe(3.5);
    });
  });

  describe('Complex orders', () => {
    it('should calculate complex order price correctly', () => {
      const order = new CoffeeOrder({
        size: 'large',
        coffeeType: 'cappuccino',
        milk: 'oat',
        shots: 2,
        temperature: 'hot',
        syrup: 'caramel',
        hasWhippedCream: true,
        hasChocolatePowder: false,
        isExtraHot: false,
        isVegan: false,
      });

      expect(calculator.calculatePrice(order)).toBe(6.35);
    });

    it('should return prices rounded to 2 decimal places', () => {
      const order = new CoffeeOrder({
        size: 'large',
        coffeeType: 'cappuccino',
        milk: 'oat',
        shots: 2,
        temperature: 'hot',
        syrup: 'caramel',
        hasWhippedCream: false,
        hasChocolatePowder: false,
        isExtraHot: false,
        isVegan: false,
      });

      const price = calculator.calculatePrice(order);
      expect(price).toBe(parseFloat(price.toFixed(2)));
    });
  });
});

describe('CoffeeOrder', () => {
  describe('Descriptions', () => {
    it('should generate description for basic coffee', () => {
      const order = new CoffeeOrder({
        size: 'medium',
        coffeeType: 'espresso',
        milk: 'none',
        shots: 1,
        temperature: 'hot',
        syrup: null,
        hasWhippedCream: false,
        hasChocolatePowder: false,
        isExtraHot: false,
        isVegan: false,
      });
      expect(order.getDescription()).toContain('espresso');
      expect(order.getDescription()).toContain('medium');
    });

    it('should include milk in description when present', () => {
      const order = new CoffeeOrder({
        size: 'medium',
        coffeeType: 'espresso',
        milk: 'oat',
        shots: 1,
        temperature: 'hot',
        syrup: null,
        hasWhippedCream: false,
        hasChocolatePowder: false,
        isExtraHot: false,
        isVegan: false,
      });
      expect(order.getDescription()).toContain('oat milk');
    });

    it('should include multiple customizations in description', () => {
      const order = new CoffeeOrder({
        size: 'large',
        coffeeType: 'cappuccino',
        milk: 'none',
        shots: 3,
        temperature: 'hot',
        syrup: 'caramel',
        hasWhippedCream: true,
        hasChocolatePowder: false,
        isExtraHot: false,
        isVegan: false,
      });

      const description = order.getDescription();
      expect(description).toContain('large');
      expect(description).toContain('3-shot');
      expect(description).toContain('cappuccino');
      expect(description).toContain('caramel syrup');
      expect(description).toContain('whipped cream');
    });

    it('should indicate extra hot in description', () => {
      const order = new CoffeeOrder({
        size: 'medium',
        coffeeType: 'espresso',
        milk: 'none',
        shots: 1,
        temperature: 'hot',
        syrup: null,
        hasWhippedCream: false,
        hasChocolatePowder: false,
        isExtraHot: true,
        isVegan: false,
      });
      expect(order.getDescription()).toContain('extra hot');
    });

    it('should indicate iced in description', () => {
      const order = new CoffeeOrder({
        size: 'medium',
        coffeeType: 'espresso',
        milk: 'none',
        shots: 1,
        temperature: 'iced',
        syrup: null,
        hasWhippedCream: false,
        hasChocolatePowder: false,
        isExtraHot: false,
        isVegan: false,
      });
      expect(order.getDescription()).toContain('iced');
    });

    it('should indicate vegan in description', () => {
      const order = new CoffeeOrder({
        size: 'medium',
        coffeeType: 'espresso',
        milk: 'oat',
        shots: 1,
        temperature: 'hot',
        syrup: null,
        hasWhippedCream: false,
        hasChocolatePowder: false,
        isExtraHot: false,
        isVegan: true,
      });
      expect(order.getDescription()).toContain('vegan');
    });
  });

  describe('Validation', () => {
    it('should validate a basic order successfully', () => {
      const order = new CoffeeOrder({
        size: 'medium',
        coffeeType: 'espresso',
        milk: 'none',
        shots: 1,
        temperature: 'hot',
        syrup: null,
        hasWhippedCream: false,
        hasChocolatePowder: false,
        isExtraHot: false,
        isVegan: false,
      });
      expect(() => order.validate()).not.toThrow();
    });

    it('should reject vegan order with whole milk', () => {
      const order = new CoffeeOrder({
        size: 'medium',
        coffeeType: 'espresso',
        milk: 'whole',
        shots: 1,
        temperature: 'hot',
        syrup: null,
        hasWhippedCream: false,
        hasChocolatePowder: false,
        isExtraHot: false,
        isVegan: true,
      });

      expect(() => order.validate()).toThrow(
        'Cannot have vegan order with whole milk'
      );
    });

    it('should reject vegan order with whipped cream', () => {
      const order = new CoffeeOrder({
        size: 'medium',
        coffeeType: 'espresso',
        milk: 'oat',
        shots: 1,
        temperature: 'hot',
        syrup: null,
        hasWhippedCream: true,
        hasChocolatePowder: false,
        isExtraHot: false,
        isVegan: true,
      });

      expect(() => order.validate()).toThrow(
        'Cannot have vegan order with whipped cream'
      );
    });

    it('should reject order that is both extra hot and iced', () => {
      const order = new CoffeeOrder({
        size: 'medium',
        coffeeType: 'espresso',
        milk: 'none',
        shots: 1,
        temperature: 'iced',
        syrup: null,
        hasWhippedCream: false,
        hasChocolatePowder: false,
        isExtraHot: true,
        isVegan: false,
      });

      expect(() => order.validate()).toThrow(
        'Cannot be both extra hot and iced'
      );
    });

    it('should reject invalid size', () => {
      const order = new CoffeeOrder({
        size: 'gigantic',
        coffeeType: 'espresso',
        milk: 'none',
        shots: 1,
        temperature: 'hot',
        syrup: null,
        hasWhippedCream: false,
        hasChocolatePowder: false,
        isExtraHot: false,
        isVegan: false,
      });

      expect(() => order.validate()).toThrow('Invalid size: gigantic');
    });
  });
});
