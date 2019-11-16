export class Words {
  count(words) {
    return words
      .trim()
      .toLowerCase()
      .split(/[\t\n ]+/)
      .reduce((result, word) => {
        result[word] = result.hasOwnProperty(word) ? result[word] + 1 : 1;
        return result;
      }, {});
  }
}
