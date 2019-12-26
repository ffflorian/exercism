/* eslint-disable no-unused-vars */

const bracketPairs = [
  ['[', ']'],
  ['{', '}'],
  ['(', ')'],
];

export const matchingBrackets = input => {
  const stack = [];

  for (const bracket of input.split('')) {
    for (const [leftBracket, rightBracket] of bracketPairs) {
      if (bracket === leftBracket) {
        stack.push(leftBracket);
      } else if (bracket === rightBracket && stack.pop() !== leftBracket) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
