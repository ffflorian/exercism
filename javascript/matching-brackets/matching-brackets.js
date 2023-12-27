//@ts-check

const bracketPairs = [
  ['[', ']'],
  ['{', '}'],
  ['(', ')'],
];

/**
 * @param {string} input
 * @returns {boolean}
 */
export function isPaired(input) {
  const stack = [];

  for (const bracket of input) {
    for (const [leftBracket, rightBracket] of bracketPairs) {
      if (bracket === leftBracket) {
        stack.push(leftBracket);
      } else if (bracket === rightBracket && stack.pop() !== leftBracket) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
