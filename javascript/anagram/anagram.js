export class Anagram {
  constructor(word) {
    this.word = word;
  }

  matches(matches) {
    return matches.reduce((result, matchTest) => {
      if (this.word.toLowerCase() !== matchTest.toLowerCase() && this._sort(this.word) === this._sort(matchTest)) {
        result.push(matchTest);
      }
      return result;
    }, []);
  }

  _sort(word) {
    return word
      .toLowerCase()
      .split('')
      .sort()
      .join('');
  }
}
