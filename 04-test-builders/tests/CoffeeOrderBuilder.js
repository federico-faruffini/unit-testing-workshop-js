import { CoffeeOrder } from './CoffeeOrder.js';

export class CoffeeOrderBuilder {
  constructor() {
    this.size = 'medium';
    this.coffeeType = 'espresso';
    this.milk = 'none';
    this.shots = 1;
    this.temperature = 'hot';
    this.syrup = null;
    this.hasWhippedCream = false;
    this.hasChocolatePowder = false;
    this.isExtraHot = false;
    this.isVegan = false;
  }

  validModel() {
    return this;
  }

  withSize(size) {
    this.size = size;
    return this;
  }

  small() {
    return this.withSize('small');
  }

  large() {
    return this.withSize('large');
  }

  withCoffeeType(type) {
    this.coffeeType = type;
    return this;
  }

  cappuccino() {
    return this.withCoffeeType('cappuccino');
  }

  latte() {
    return this.withCoffeeType('latte');
  }

  americano() {
    return this.withCoffeeType('americano');
  }

  withMilk(milk) {
    this.milk = milk;
    return this;
  }

  withWholeMilk() {
    return this.withMilk('whole');
  }

  withSkimMilk() {
    return this.withMilk('skim');
  }

  withOatMilk() {
    return this.withMilk('oat');
  }

  withAlmondMilk() {
    return this.withMilk('almond');
  }

  withShots(count) {
    this.shots = count;
    return this;
  }

  withTemperature(temp) {
    this.temperature = temp;
    return this;
  }

  iced() {
    return this.withTemperature('iced');
  }

  extraHot() {
    this.isExtraHot = true;
    return this;
  }

  withSyrup(flavor) {
    this.syrup = flavor;
    return this;
  }

  withVanillaSyrup() {
    return this.withSyrup('vanilla');
  }

  withCaramelSyrup() {
    return this.withSyrup('caramel');
  }

  withWhippedCream() {
    this.hasWhippedCream = true;
    return this;
  }

  withChocolatePowder() {
    this.hasChocolatePowder = true;
    return this;
  }

  withVegan() {
    this.isVegan = true;
    this.milk = 'oat';
    return this;
  }

  build() {
    return new CoffeeOrder({
      size: this.size,
      coffeeType: this.coffeeType,
      milk: this.milk,
      shots: this.shots,
      temperature: this.temperature,
      syrup: this.syrup,
      hasWhippedCream: this.hasWhippedCream,
      hasChocolatePowder: this.hasChocolatePowder,
      isExtraHot: this.isExtraHot,
      isVegan: this.isVegan,
    });
  }
}
