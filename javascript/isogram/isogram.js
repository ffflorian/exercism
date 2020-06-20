/**
 * @param {string} word
 */
export function isIsogram(word) {
  return !/([A-zÀ-ÿ]).*\1/i.test(word);
}
