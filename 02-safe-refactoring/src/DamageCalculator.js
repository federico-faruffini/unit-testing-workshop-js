import { DamageType } from './DamageType.js';

export class DamageCalculator {
  static computeDamage(p, e) {
    if (!p) {
      throw new Error('Player cannot be null');
    }
    if (!e) {
      throw new Error('Enemy cannot be null');
    }

    let d = p.atk + p.bonus - e.defense;

    if (d < 0) {
      d = 0;
    }

    if (e.isVulnerable) {
      d += 5;
    }

    if (p.damageType !== DamageType.BASIC) {
      if (p.damageType === e.resistanceToType) {
        d -= 3;
      }
    }

    if (d < 0) {
      d = 0;
    }

    if (d > e.life) {
      d = e.life;
    }

    return d;
  }
}
