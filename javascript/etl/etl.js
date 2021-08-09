// @ts-check

/**
 * @param {Record<number, string[]>} oldSet
 * @returns {Record<string, number>}
 */
export function transform(oldSet) {
  return Object.keys(oldSet).reduce((newSet, index) => {
    oldSet[index].forEach(letter => (newSet[letter.toLowerCase()] = parseInt(index)));
    return newSet;
  }, {});
}
