const zero = [' _ ', '| |', '|_|', '   '].join('');
const one = ['   ', '  |', '  |', '   '].join('');

export default class OcrParser {
  public static convert(input: string): string {
    const lines = input.split('\n');
    const numbersCount = lines[0].length;
    const numbers: string[] = [];
    for (let i = 0; i < numbersCount; i += 3) {
      numbers[i] = '';
      for (const line of lines) {
        numbers[i] += line.substr(i, 3);
      }
    }
    let str = numbers
      .map(number => {
        if (number === zero) {
          return '0';
        }
        if (number === one) {
          return '1';
        }
        return '?';
      })
      .join('');

    return str;
  }
}
