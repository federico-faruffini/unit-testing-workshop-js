import { DamageType } from './DamageType.js';

export class Player {
  constructor(atk = 0, bonus = 0, damageType = DamageType.BASIC) {
    this.atk = atk;
    this.bonus = bonus;
    this.damageType = damageType;
  }
}
