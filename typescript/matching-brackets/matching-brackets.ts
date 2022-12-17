const bracketPairs = [
  ['[', ']'],
  ['{', '}'],
  ['(', ')'],
];

export function isPaired(input: string): boolean {
  const stack = [];

  for (const bracket of [...input]) {
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
