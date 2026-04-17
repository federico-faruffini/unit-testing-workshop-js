import WordCounter from '../WordCounter.js';

describe('WordCounter', () => {
  let wordCounter;

  beforeEach(() => {
    wordCounter = new WordCounter();
  });

  test('should return 0 for null input', () => {
    expect(wordCounter.countWords(null)).toBe(0);
  });

  test('should return 0 for empty string', () => {
    expect(wordCounter.countWords('')).toBe(0);
  });

  test('should return 0 for string with only spaces', () => {
    expect(wordCounter.countWords('   ')).toBe(0);
  });

  test('should return 1 for single word', () => {
    expect(wordCounter.countWords('hello')).toBe(1);
  });

  test('should return 1 for single word with leading spaces', () => {
    expect(wordCounter.countWords('  hello')).toBe(1);
  });

  test('should return 1 for single word with trailing spaces', () => {
    expect(wordCounter.countWords('hello  ')).toBe(1);
  });

  test('should return 2 for two words separated by single space', () => {
    expect(wordCounter.countWords('hello world')).toBe(2);
  });

  test('should return 2 for two words separated by multiple spaces', () => {
    expect(wordCounter.countWords('hello   world')).toBe(2);
  });

  test('should return 3 for three words with mixed spacing', () => {
    expect(wordCounter.countWords('  hello   world  test  ')).toBe(3);
  });
});