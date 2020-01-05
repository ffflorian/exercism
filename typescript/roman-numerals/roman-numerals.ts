export default class RomanNumerals {
  static roman(number: number): string {
    if (number < 1 || number > 3999) {
      throw new Error('Invalid number');
    }
    let value = '';
    for (let i = 0; number > 0 && i < RomanNumerals.map.length; i++) {
      const [currentNumber, currentRoman] = RomanNumerals.map[i];
      while (number >= currentNumber) {
        value += currentRoman;
        number -= currentNumber;
      }
    }
    return value;
  }
  // tslint:disable-next-line
private static readonly map: [number, string][] = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ];
}
