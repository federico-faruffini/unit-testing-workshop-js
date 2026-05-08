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

    if (p.level - e.level >= 10) {
      d = Math.floor(d * 2);
    } else if (p.level - e.level >= 5) {
      d = Math.floor(d * 1.5);
    } else if (p.level - e.level <= -10) {
      d = Math.floor(d * 0.25);
    } else if (p.level - e.level <= -5) {
      d = Math.floor(d * 0.5);
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
