export default class Pangram {
  private readonly sentence: string;

  constructor(sentence: string) {
    this.sentence = sentence.trim().toLowerCase();
  }

  isPangram(): boolean {
    return 'abcdefghijklmnopqrstuvwxyz'.split('').filter(char => this.sentence.indexOf(char) === -1).length < 1;
  }
}
