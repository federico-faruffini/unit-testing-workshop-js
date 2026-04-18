import { DamageCalculator } from '../src/DamageCalculator.js';
import { Player } from '../src/Player.js';
import { Enemy } from '../src/Enemy.js';
import { DamageType } from '../src/DamageType.js';

describe('DamageCalculator', () => {
  describe('computeDamage', () => {
    it('should return correct damage when attack is greater than defense and no modifiers apply', () => {
      const player = new Player(20, 5, DamageType.BASIC);
      const enemy = new Enemy(10, 100);

      const damage = DamageCalculator.computeDamage(player, enemy);

      expect(damage).toBe(15);
    });

    it('should return zero when attack is less than defense', () => {
      const player = new Player(5, 0, DamageType.BASIC);
      const enemy = new Enemy(15, 100);

      const damage = DamageCalculator.computeDamage(player, enemy);

      expect(damage).toBe(0);
    });

    it('should add 5 damage when the enemy is vulnerable', () => {
      const player = new Player(10, 0, DamageType.BASIC);
      const enemy = new Enemy(5, 100, true);

      const damage = DamageCalculator.computeDamage(player, enemy);

      expect(damage).toBe(10);
    });

    it('should subtract 3 damage when the attack type matches resistance and is not basic', () => {
      const player = new Player(15, 0, DamageType.FROST);
      const enemy = new Enemy(5, 100, false, DamageType.FROST);

      const damage = DamageCalculator.computeDamage(player, enemy);

      expect(damage).toBe(7);
    });

    it('should ignore resistance when the damage type is BASIC', () => {
      const player = new Player(15, 0, DamageType.BASIC);
      const enemy = new Enemy(5, 100, false, DamageType.BASIC);

      const damage = DamageCalculator.computeDamage(player, enemy);

      expect(damage).toBe(10);
    });

    it('should ignore resistance penalty when the types do not match', () => {
      const player = new Player(15, 0, DamageType.FROST);
      const enemy = new Enemy(5, 100, false, DamageType.FIRE);

      const damage = DamageCalculator.computeDamage(player, enemy);

      expect(damage).toBe(10);
    });

    it('should clamp damage to enemy life points when it exceeds them', () => {
      const player = new Player(50, 0, DamageType.BASIC);
      const enemy = new Enemy(10, 30);

      const damage = DamageCalculator.computeDamage(player, enemy);

      expect(damage).toBe(30);
    });

    it('should return zero when damage becomes negative after modifiers', () => {
      const player = new Player(10, 0, DamageType.FROST);
      const enemy = new Enemy(15, 100, false, DamageType.FROST);

      const damage = DamageCalculator.computeDamage(player, enemy);

      expect(damage).toBe(0);
    });

    it('should throw an error when player is null', () => {
      const enemy = new Enemy(10, 100);

      expect(() => DamageCalculator.computeDamage(null, enemy)).toThrow('Player cannot be null');
    });

    it('should throw an error when enemy is null', () => {
      const player = new Player(10, 0, DamageType.BASIC);

      expect(() => DamageCalculator.computeDamage(player, null)).toThrow('Enemy cannot be null');
    });
  });
});
