import { DamageType } from './DamageType.js';

export class Player {
  constructor(atk = 0, bonus = 0, damageType = DamageType.BASIC, level = 1) {
    this.atk = atk;
    this.bonus = bonus;
    this.damageType = damageType;
    this.level = level;
  }
}
