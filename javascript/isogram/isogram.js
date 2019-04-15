module.exports = class Isogram {
  constructor(word) {
    this.word = word;
  }

  isIsogram() {
    return !(/([A-zÀ-ÿ]).*\1/i).test(this.word);
  }
};
