const map = [
  1000,
  'M',
  900,
  'CM',
  500,
  'D',
  400,
  'CD',
  100,
  'C',
  90,
  'XC',
  50,
  'L',
  40,
  'XL',
  10,
  'X',
  9,
  'IX',
  5,
  'V',
  4,
  'IV',
  1,
  'I',
];

export function toRoman(number) {
  if (number < 1 || number > 3999) {
    throw new Error('Invalid number');
  }
  let value = '';
  for (let i = 0; number > 0 && i < map.length; i += 2) {
    while (number >= map[i]) {
      value += map[i + 1];
      number -= map[i];
    }
  }
  return value;
}
