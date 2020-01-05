export function encode(input) {
  return input.replace(/([\w\s])\1*/g, match => `${match.length > 1 ? match.length : ''}${match[0]}`);
}

export function decode(input) {
  return input.replace(/(\d+)(\w|\s)/g, (_match, repeats, char) => new Array(parseInt(repeats, 10) + 1).join(char));
}
