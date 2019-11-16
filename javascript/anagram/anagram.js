function sort(word) {
  return word
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

export const Anagram = {
  matches(...matches) {
    matches = Array.prototype.concat.apply([], matches);
    return matches.reduce((result, matchTest) => {
      if (word.toLowerCase() !== matchTest.toLowerCase() && sort(word) === matchTest.sort()) {
        result.push(matchTest);
      }
      return result;
    }, []);
  },
};
