//@ts-check

/**
 * @param {string} word
 * @returns {string}
 */
function sort(word) {
  return [...word.toLowerCase()].sort().join('');
}

/**
 * @param {string} word
 * @param {string[]} matches
 * @returns {string[]}
 */
export function findAnagrams(word, matches) {
  return matches.reduce((/** @type string[] */ result, matchTest) => {
    if (word.toLowerCase() !== matchTest.toLowerCase() && sort(word) === sort(matchTest)) {
      result.push(matchTest);
    }
    return result;
  }, []);
}
