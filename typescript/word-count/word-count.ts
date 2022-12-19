export function count(words: string): Map<string, number> {
  return words
    .trim()
    .toLowerCase()
    .split(/[\t\n ]+/)
    .reduce((result, word) => {
      result.set(word, result.has(word) ? result.get(word)! + 1 : 1);
      return result;
    }, new Map<string, number>());
}
