//@ts-check

/**
 * @param {string} word
 * @returns {boolean}
 */
export function isIsogram(word) {
  return !/([A-zÀ-ÿ]).*\1/i.test(word);
}
