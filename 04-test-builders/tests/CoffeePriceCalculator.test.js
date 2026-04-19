import { CoffeeOrder } from '../CoffeeOrder.js';
import { CoffeePriceCalculator } from '../CoffeePriceCalculator.js';

describe('CoffeePriceCalculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new CoffeePriceCalculator();
  });

  describe('Basic price calculation', () => {
    it('should calculate price for a basic espresso', () => {
      // Arrange
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

      // Act
      const price = calculator.calculatePrice(order);

      // Assert
      expect(price).toBe(2.0);
    });

    it('should calculate price for different coffee types', () => {
      // Arrange
      const espresso = new CoffeeOrder({ coffeeType: 'espresso', size: 'medium', milk: 'none', shots: 1, temperature: 'hot', syrup: null, hasWhippedCream: false, hasChocolatePowder: false, isExtraHot: false, isVegan: false });
      const cappuccino = new CoffeeOrder({ coffeeType: 'cappuccino', size: 'medium', milk: 'none', shots: 1, temperature: 'hot', syrup: null, hasWhippedCream: false, hasChocolatePowder: false, isExtraHot: false, isVegan: false });
      const latte = new CoffeeOrder({ coffeeType: 'latte', size: 'medium', milk: 'none', shots: 1, temperature: 'hot', syrup: null, hasWhippedCream: false, hasChocolatePowder: false, isExtraHot: false, isVegan: false });
      const americano = new CoffeeOrder({ coffeeType: 'americano', size: 'medium', milk: 'none', shots: 1, temperature: 'hot', syrup: null, hasWhippedCream: false, hasChocolatePowder: false, isExtraHot: false, isVegan: false });
      const macchiato = new CoffeeOrder({ coffeeType: 'macchiato', size: 'medium', milk: 'none', shots: 1, temperature: 'hot', syrup: null, hasWhippedCream: false, hasChocolatePowder: false, isExtraHot: false, isVegan: false });

      // Act
      const espressoPrice = calculator.calculatePrice(espresso);
      const cappuccinoPrice = calculator.calculatePrice(cappuccino);
      const lattePrice = calculator.calculatePrice(latte);
      const americanoPrice = calculator.calculatePrice(americano);
      const macchiatoPrice = calculator.calculatePrice(macchiato);

      // Assert
      expect(espressoPrice).toBe(2.0);
      expect(cappuccinoPrice).toBe(3.0);
      expect(lattePrice).toBe(3.0);
      expect(americanoPrice).toBe(2.5);
      expect(macchiatoPrice).toBe(3.5);
    });
  });

  describe('Size multiplier', () => {
    it('should apply size multiplier to price', () => {
      // Arrange
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

      // Act
      const smallPrice = calculator.calculatePrice(smallOrder);
      const mediumPrice = calculator.calculatePrice(mediumOrder);
      const largePrice = calculator.calculatePrice(largeOrder);

      // Assert
      expect(smallPrice).toBe(1.8);
      expect(mediumPrice).toBe(2.0);
      expect(largePrice).toBe(2.4);
    });
  });

  describe('Extra shots', () => {
    it('should add price for extra shots', () => {
      // Arrange
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

      // Act
      const singleShotPrice = calculator.calculatePrice(singleShot);
      const doubleShotPrice = calculator.calculatePrice(doubleShot);
      const tripleShotPrice = calculator.calculatePrice(tripleShot);

      // Assert
      expect(singleShotPrice).toBe(2.0);
      expect(doubleShotPrice).toBe(2.75);
      expect(tripleShotPrice).toBe(3.5);
    });
  });

  describe('Milk options', () => {
    it('should add price for milk options', () => {
      // Arrange
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

      // Act
      const noMilkPrice = calculator.calculatePrice(noMilk);
      const wholeMilkPrice = calculator.calculatePrice(wholeMilk);
      const skimMilkPrice = calculator.calculatePrice(skimMilk);
      const oatMilkPrice = calculator.calculatePrice(oatMilk);
      const almondMilkPrice = calculator.calculatePrice(almondMilk);

      // Assert
      expect(noMilkPrice).toBe(2.0);
      expect(wholeMilkPrice).toBe(2.5);
      expect(skimMilkPrice).toBe(2.5);
      expect(oatMilkPrice).toBe(2.75);
      expect(almondMilkPrice).toBe(2.75);
    });
  });

  describe('Toppings and extras', () => {
    it('should add price for whipped cream', () => {
      // Arrange
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

      // Act
      const withoutWhippedCreamPrice = calculator.calculatePrice(withoutWhippedCream);
      const withWhippedCreamPrice = calculator.calculatePrice(withWhippedCream);

      // Assert
      expect(withoutWhippedCreamPrice).toBe(2.0);
      expect(withWhippedCreamPrice).toBe(2.75);
    });

    it('should add price for chocolate powder', () => {
      // Arrange
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

      // Act
      const withoutChocolatePrice = calculator.calculatePrice(withoutChocolate);
      const withChocolatePrice = calculator.calculatePrice(withChocolate);

      // Assert
      expect(withoutChocolatePrice).toBe(2.0);
      expect(withChocolatePrice).toBe(2.5);
    });

    it('should add price for syrup', () => {
      // Arrange
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

      // Act
      const withoutSyrupPrice = calculator.calculatePrice(withoutSyrup);
      const withSyrupPrice = calculator.calculatePrice(withSyrup);

      // Assert
      expect(withoutSyrupPrice).toBe(2.0);
      expect(withSyrupPrice).toBe(2.5);
    });

    it('should add price for extra hot', () => {
      // Arrange
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

      // Act
      const regularHotPrice = calculator.calculatePrice(regularHot);
      const extraHotPrice = calculator.calculatePrice(extraHot);

      // Assert
      expect(regularHotPrice).toBe(2.0);
      expect(extraHotPrice).toBe(2.25);
    });

    it('should calculate price for multiple toppings', () => {
      // Arrange
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

      // Act
      const deluxePrice = calculator.calculatePrice(deluxe);

      // Assert
      expect(deluxePrice).toBe(3.5);
    });
  });

  describe('Complex orders', () => {
    it('should calculate complex order price correctly', () => {
      // Arrange
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

      // Act
      const price = calculator.calculatePrice(order);

      // Assert
      expect(price).toBe(6.35);
    });

    it('should return prices rounded to 2 decimal places', () => {
      // Arrange
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

      // Act
      const price = calculator.calculatePrice(order);

      // Assert
      expect(price).toBe(parseFloat(price.toFixed(2)));
    });
  });
});

describe('CoffeeOrder', () => {
  describe('Descriptions', () => {
    it('should generate description for basic coffee', () => {
      // Arrange
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

      // Act
      const description = order.getDescription();

      // Assert
      expect(description).toContain('espresso');
      expect(description).toContain('medium');
    });

    it('should include milk in description when present', () => {
      // Arrange
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

      // Act
      const description = order.getDescription();

      // Assert
      expect(description).toContain('oat milk');
    });

    it('should include multiple customizations in description', () => {
      // Arrange
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

      // Act
      const description = order.getDescription();

      // Assert
      expect(description).toContain('large');
      expect(description).toContain('3-shot');
      expect(description).toContain('cappuccino');
      expect(description).toContain('caramel syrup');
      expect(description).toContain('whipped cream');
    });

    it('should indicate extra hot in description', () => {
      // Arrange
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

      // Act
      const description = order.getDescription();

      // Assert
      expect(description).toContain('extra hot');
    });

    it('should indicate iced in description', () => {
      // Arrange
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

      // Act
      const description = order.getDescription();

      // Assert
      expect(description).toContain('iced');
    });

    it('should indicate vegan in description', () => {
      // Arrange
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

      // Act
      const description = order.getDescription();

      // Assert
      expect(description).toContain('vegan');
    });
  });

  describe('Validation', () => {
    it('should validate a basic order successfully', () => {
      // Arrange
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

      // Act
      const action = () => order.validate();

      // Assert
      expect(action).not.toThrow();
    });

    it('should reject vegan order with whole milk', () => {
      // Arrange
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

      // Act
      const action = () => order.validate();

      // Assert
      expect(action).toThrow('Cannot have vegan order with whole milk');
    });

    it('should reject vegan order with whipped cream', () => {
      // Arrange
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

      // Act
      const action = () => order.validate();

      // Assert
      expect(action).toThrow('Cannot have vegan order with whipped cream');
    });

    it('should reject order that is both extra hot and iced', () => {
      // Arrange
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

      // Act
      const action = () => order.validate();

      // Assert
      expect(action).toThrow('Cannot be both extra hot and iced');
    });

    it('should reject invalid size', () => {
      // Arrange
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

      // Act
      const action = () => order.validate();

      // Assert
      expect(action).toThrow('Invalid size: gigantic');
    });
  });
});
