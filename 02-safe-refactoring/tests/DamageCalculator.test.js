import { DamageCalculator } from '../src/DamageCalculator.js';
import { Player } from '../src/Player.js';
import { Enemy } from '../src/Enemy.js';
import { DamageType } from '../src/DamageType.js';

describe('DamageCalculator', () => {
  describe('computeDamage', () => {
    it('should return correct damage when attack is greater than defense and no modifiers apply', () => {
      // Arrange
      const player = new Player(20, 5, DamageType.BASIC);
      const enemy = new Enemy(10, 100);

      // Act
      const damage = DamageCalculator.computeDamage(player, enemy);

      // Assert
      expect(damage).toBe(15);
    });

    it('should return zero when attack is less than defense', () => {
      // Arrange
      const player = new Player(5, 0, DamageType.BASIC);
      const enemy = new Enemy(15, 100);

      // Act
      const damage = DamageCalculator.computeDamage(player, enemy);

      // Assert
      expect(damage).toBe(0);
    });

    it('should add 5 damage when the enemy is vulnerable', () => {
      // Arrange
      const player = new Player(10, 0, DamageType.BASIC);
      const enemy = new Enemy(5, 100, true);

      // Act
      const damage = DamageCalculator.computeDamage(player, enemy);

      // Assert
      expect(damage).toBe(10);
    });

    it('should subtract 3 damage when the attack type matches resistance and is not basic', () => {
      // Arrange
      const player = new Player(15, 0, DamageType.FROST);
      const enemy = new Enemy(5, 100, false, DamageType.FROST);

      // Act
      const damage = DamageCalculator.computeDamage(player, enemy);

      // Assert
      expect(damage).toBe(7);
    });

    it('should ignore resistance when the damage type is BASIC', () => {
      // Arrange
      const player = new Player(15, 0, DamageType.BASIC);
      const enemy = new Enemy(5, 100, false, DamageType.BASIC);

      // Act
      const damage = DamageCalculator.computeDamage(player, enemy);

      // Assert
      expect(damage).toBe(10);
    });

    it('should ignore resistance penalty when the types do not match', () => {
      // Arrange
      const player = new Player(15, 0, DamageType.FROST);
      const enemy = new Enemy(5, 100, false, DamageType.FIRE);

      // Act
      const damage = DamageCalculator.computeDamage(player, enemy);

      // Assert
      expect(damage).toBe(10);
    });

    it('should clamp damage to enemy life points when it exceeds them', () => {
      // Arrange
      const player = new Player(50, 0, DamageType.BASIC);
      const enemy = new Enemy(10, 30);

      // Act
      const damage = DamageCalculator.computeDamage(player, enemy);

      // Assert
      expect(damage).toBe(30);
    });

    it('should return zero when damage becomes negative after modifiers', () => {
      // Arrange
      const player = new Player(10, 0, DamageType.FROST);
      const enemy = new Enemy(15, 100, false, DamageType.FROST);

      // Act
      const damage = DamageCalculator.computeDamage(player, enemy);

      // Assert
      expect(damage).toBe(0);
    });

    it('should throw an error when player is null', () => {
      // Arrange
      const enemy = new Enemy(10, 100);

      // Act
      const action = () => DamageCalculator.computeDamage(null, enemy);

      // Assert
      expect(action).toThrow('Player cannot be null');
    });

    it('should throw an error when enemy is null', () => {
      // Arrange
      const player = new Player(10, 0, DamageType.BASIC);

      // Act
      const action = () => DamageCalculator.computeDamage(player, null);

      // Assert
      expect(action).toThrow('Enemy cannot be null');
    });

    it('should not apply level multiplier when level difference is less than 5', () => {
      // Arrange
      const player = new Player(10, 0, DamageType.BASIC, 4);
      const enemy = new Enemy(5, 100, false, DamageType.BASIC, 1);

      // Act
      const damage = DamageCalculator.computeDamage(player, enemy);

      // Assert
      expect(damage).toBe(5);
    });

    it('should multiply damage by 1.5 when player is 5 or more levels above enemy', () => {
      // Arrange
      const player = new Player(10, 0, DamageType.BASIC, 8);
      const enemy = new Enemy(5, 100, false, DamageType.BASIC, 3);

      // Act
      const damage = DamageCalculator.computeDamage(player, enemy);

      // Assert
      expect(damage).toBe(7);
    });

    it('should multiply damage by 2 when player is 10 or more levels above enemy', () => {
      // Arrange
      const player = new Player(10, 0, DamageType.BASIC, 13);
      const enemy = new Enemy(5, 100, false, DamageType.BASIC, 3);

      // Act
      const damage = DamageCalculator.computeDamage(player, enemy);

      // Assert
      expect(damage).toBe(10);
    });

    it('should multiply damage by 0.5 when player is 5 or more levels below enemy', () => {
      // Arrange
      const player = new Player(10, 0, DamageType.BASIC, 3);
      const enemy = new Enemy(5, 100, false, DamageType.BASIC, 8);

      // Act
      const damage = DamageCalculator.computeDamage(player, enemy);

      // Assert
      expect(damage).toBe(2);
    });

    it('should multiply damage by 0.25 when player is 10 or more levels below enemy', () => {
      // Arrange
      const player = new Player(10, 0, DamageType.BASIC, 3);
      const enemy = new Enemy(5, 100, false, DamageType.BASIC, 13);

      // Act
      const damage = DamageCalculator.computeDamage(player, enemy);

      // Assert
      expect(damage).toBe(1);
    });

    it('should round down the multiplied damage', () => {
      // Arrange
      const player = new Player(15, 0, DamageType.BASIC, 8);
      const enemy = new Enemy(6, 100, false, DamageType.BASIC, 3);

      // Act
      const damage = DamageCalculator.computeDamage(player, enemy);

      // Assert
      expect(damage).toBe(13);
    });

    it('should clamp multiplied damage to enemy life', () => {
      // Arrange
      const player = new Player(20, 0, DamageType.BASIC, 20);
      const enemy = new Enemy(5, 25, false, DamageType.BASIC, 3);

      // Act
      const damage = DamageCalculator.computeDamage(player, enemy);

      // Assert
      expect(damage).toBe(25);
    });

    it('should not increase zero damage with level multiplier', () => {
      // Arrange
      const player = new Player(5, 0, DamageType.BASIC, 20);
      const enemy = new Enemy(15, 100, false, DamageType.BASIC, 3);

      // Act
      const damage = DamageCalculator.computeDamage(player, enemy);

      // Assert
      expect(damage).toBe(0);
    });
  });
});
