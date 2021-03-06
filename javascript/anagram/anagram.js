/**
 * @param {string} word
 */
function sort(word) {
  return word.toLowerCase().split('').sort().join('');
}

/**
 * @param {string} word
 * @param {string[]} matches
 */
export function findAnagrams(word, matches) {
  return matches.reduce((/** @type string[] */ result, matchTest) => {
    if (word.toLowerCase() !== matchTest.toLowerCase() && sort(word) === sort(matchTest)) {
      result.push(matchTest);
    }
    return result;
  }, []);
}
