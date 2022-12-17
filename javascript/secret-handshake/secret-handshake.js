const availableCommands = ['jump', 'close your eyes', 'double blink', 'wink'];

export function commands(input) {
  const binary = (input >>> 0).toString(2).padStart(5, '0');
  const result = [];

  for (let index = binary.length - 1; index >= 0; index--) {
    if (binary[index] === '1') {
      if (index === 0) {
        result.reverse();
      } else {
        result.push(availableCommands[index - 1]);
      }
    }
  }

  return result;
}
