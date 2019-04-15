const map = [
  1000, 'M',
  900, 'CM',
  500, 'D',
  400, 'CD',
  100, 'C',
  90, 'XC',
  50, 'L',
  40, 'XL',
  10, 'X',
  9, 'IX',
  5, 'V',
  4, 'IV',
  1, 'I',
];

module.exports = number => {
  if (number < 1 || number > 3999) {
    throw new Error('Invalid number');
  }
  let value = '';
  for (let index = 0; number > 0 && index < map.length; index += 2) {
    while (number >= map[index]) {
      value += map[index + 1];
      number -= map[index];
    }
  }
  return value;
};
