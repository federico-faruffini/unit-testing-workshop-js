import { DamageType } from './DamageType.js';

export class Enemy {
  constructor(defense = 0, lifePoints = 0, isVulnerable = false, resistanceToType = DamageType.BASIC) {
    this.defense = defense;
    this.life = lifePoints;
    this.isVulnerable = isVulnerable;
    this.resistanceToType = resistanceToType;
  }
}
