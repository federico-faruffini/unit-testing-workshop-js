import { CoffeePricingRules } from './CoffeePricingRules.js';

export class CoffeePriceCalculator {
  calculatePrice(coffeeOrder) {
    let price = CoffeePricingRules.basePrices[coffeeOrder.coffeeType] || 2.0;
    price *= CoffeePricingRules.sizeMultipliers[coffeeOrder.size] || 1.0;

    const hasExtraShots = coffeeOrder.shots > 1;
    if (hasExtraShots) {
      price += (coffeeOrder.shots - 1) * 0.75;
    }

    // Milk surcharge
    price += CoffeePricingRules.milkPrices[coffeeOrder.milk] || 0;

    // Syrup
    if (coffeeOrder.syrup) {
      price += 0.5;
    }

    if (coffeeOrder.hasWhippedCream) {
      price += 0.75;
    }

    if (coffeeOrder.hasChocolatePowder) {
      price += 0.5;
    }

    if (coffeeOrder.isExtraHot) {
      price += 0.25;
    }

    return parseFloat(price.toFixed(2));
  }
}
