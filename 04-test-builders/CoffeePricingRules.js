export class CoffeePricingRules {
  static basePrices = {
    espresso: 2.0,
    cappuccino: 3.0,
    latte: 3.0,
    macchiato: 3.5,
    americano: 2.5,
  };

  static sizeMultipliers = {
    small: 0.9,
    medium: 1.0,
    large: 1.2,
  };

  static milkPrices = {
    none: 0,
    whole: 0.5,
    skim: 0.5,
    oat: 0.75,
    almond: 0.75,
  };
}
