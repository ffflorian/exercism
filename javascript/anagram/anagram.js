module.exports = class Anagram {
  constructor(word) {
    this.word = word;
  }

  sortString(string) {
    return string.toLowerCase().split('').sort().join('');
  };

  matches(...matches) {
    matches = Array.prototype.concat.apply([], matches);
    return matches.reduce((result, matchTest) => {
      if (this.word.toLowerCase() !== matchTest.toLowerCase() && this.sortString(this.word) === this.sortString(matchTest)) {
        result.push(matchTest);
      }
      return result;
    }, []);
  }
};
