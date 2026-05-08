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

    it('should not add level bonus when player level is below 5', () => {
      // Arrange
      const player = new Player(10, 0, DamageType.BASIC, 3);
      const enemy = new Enemy(5, 100);

      // Act
      const damage = DamageCalculator.computeDamage(player, enemy);

      // Assert
      expect(damage).toBe(5);
    });

    it('should add 2 damage when player level is between 5 and 9', () => {
      // Arrange
      const player = new Player(10, 0, DamageType.BASIC, 7);
      const enemy = new Enemy(5, 100);

      // Act
      const damage = DamageCalculator.computeDamage(player, enemy);

      // Assert
      expect(damage).toBe(7);
    });

    it('should add 5 damage when player level is between 10 and 19', () => {
      // Arrange
      const player = new Player(10, 0, DamageType.BASIC, 15);
      const enemy = new Enemy(5, 100);

      // Act
      const damage = DamageCalculator.computeDamage(player, enemy);

      // Assert
      expect(damage).toBe(10);
    });

    it('should add 5 plus 3 extra damage when player level is between 10 and 19 and enemy is vulnerable', () => {
      // Arrange
      const player = new Player(10, 0, DamageType.BASIC, 15);
      const enemy = new Enemy(5, 100, true);

      // Act
      const damage = DamageCalculator.computeDamage(player, enemy);

      // Assert
      expect(damage).toBe(18);
    });

    it('should add 10 damage when player level is 20 or above', () => {
      // Arrange
      const player = new Player(10, 0, DamageType.BASIC, 25);
      const enemy = new Enemy(5, 100);

      // Act
      const damage = DamageCalculator.computeDamage(player, enemy);

      // Assert
      expect(damage).toBe(15);
    });

    it('should add 10 plus 3 extra damage when player level is 20 or above and enemy is vulnerable', () => {
      // Arrange
      const player = new Player(10, 0, DamageType.BASIC, 25);
      const enemy = new Enemy(5, 100, true);

      // Act
      const damage = DamageCalculator.computeDamage(player, enemy);

      // Assert
      expect(damage).toBe(23);
    });

    it('should not add vulnerability bonus from level when level is between 5 and 9 even if enemy is vulnerable', () => {
      // Arrange
      const player = new Player(10, 0, DamageType.BASIC, 7);
      const enemy = new Enemy(5, 100, true);

      // Act
      const damage = DamageCalculator.computeDamage(player, enemy);

      // Assert
      expect(damage).toBe(12);
    });

    it('should clamp level bonus damage to enemy life', () => {
      // Arrange
      const player = new Player(10, 0, DamageType.BASIC, 25);
      const enemy = new Enemy(5, 8);

      // Act
      const damage = DamageCalculator.computeDamage(player, enemy);

      // Assert
      expect(damage).toBe(8);
    });
  });
});
