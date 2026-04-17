class WordCounter {
  countWords(str) {
    if (!str) {
      return 0;
    }

    let containsOnlyWhiteSpaces = str.trim() === '';
    if (containsOnlyWhiteSpaces) {
      return 0;
    }

    return str.trim().split(/\s+/).length;
  }
}

export default WordCounter;