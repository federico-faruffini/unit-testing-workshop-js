export class CoffeeOrder {
  constructor({
    size,
    coffeeType,
    milk,
    shots,
    temperature,
    syrup,
    hasWhippedCream,
    hasChocolatePowder,
    isExtraHot,
    isVegan,
  }) {
    this.size = size;
    this.coffeeType = coffeeType;
    this.milk = milk;
    this.shots = shots;
    this.temperature = temperature;
    this.syrup = syrup;
    this.hasWhippedCream = hasWhippedCream;
    this.hasChocolatePowder = hasChocolatePowder;
    this.isExtraHot = isExtraHot;
    this.isVegan = isVegan;
  }

  getDescription() {
    const descriptionParts = [];

    if (this.isExtraHot) {
      descriptionParts.push('extra hot');
    } else if (this.temperature === 'iced') {
      descriptionParts.push('iced');
    }

    const hasExtraShots = this.shots > 1;
    if (hasExtraShots) {
      descriptionParts.push(`${this.shots}-shot`);
    }

    descriptionParts.push(this.coffeeType);

    if (this.milk !== 'none') {
      descriptionParts.push(`with ${this.milk} milk`);
    }

    if (this.syrup) {
      descriptionParts.push(`${this.syrup} syrup`);
    }

    if (this.hasWhippedCream) {
      descriptionParts.push('with whipped cream');
    }

    if (this.hasChocolatePowder) {
      descriptionParts.push('with chocolate powder');
    }

    if (this.isVegan) {
      descriptionParts.push('(vegan)');
    }

    return `${this.size} ${descriptionParts.join(' ')}`;
  }

  validate() {
    if (this.isVegan && this.milk === 'whole') {
      throw new Error('Cannot have vegan order with whole milk');
    }

    if (this.isVegan && this.hasWhippedCream) {
      throw new Error('Cannot have vegan order with whipped cream');
    }

    if (this.isExtraHot && this.temperature === 'iced') {
      throw new Error('Cannot be both extra hot and iced');
    }

    if (!['small', 'medium', 'large'].includes(this.size)) {
      throw new Error(`Invalid size: ${this.size}`);
    }

    return true;
  }
}
