/* eslint-disable no-unused-vars */

export default class MatchingBrackets {
  private readonly bracketPairs = [
    ['[', ']'],
    ['{', '}'],
    ['(', ')'],
  ];
  private readonly input: string;

  constructor(input: string) {
    this.input = input;
  }

  isPaired(): boolean {
    const stack = [];

    for (const bracket of this.input.split('')) {
      for (const [leftBracket, rightBracket] of this.bracketPairs) {
        if (bracket === leftBracket) {
          stack.push(leftBracket);
        } else if (bracket === rightBracket && stack.pop() !== leftBracket) {
          return false;
        }
      }
    }

    return stack.length === 0;
  }
}
