module.exports = class Pangram {
  constructor(sentence){
    this.sentence = sentence.trim().toLowerCase();
  }

  isPangram() {
    return 'abcdefghijklmnopqrstuvwxyz'.split('').filter(char =>
      this.sentence.indexOf(char) === -1,
    ).length < 1;
  }
};
