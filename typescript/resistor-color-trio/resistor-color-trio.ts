// prettier-ignore
const colors = [
  'Black',
  'Brown',
  'Red',
  'Orange',
  'Yellow',
  'Green',
  'Blue',
  'Violet',
  'Grey',
  'White',
].map(color => color.toLowerCase())

const prefixes = [
  {
    unit: 'giga',
    value: 1_000_000_000,
  },
  {
    unit: 'mega',
    value: 1_000_000,
  },
  {
    unit: 'kilo',
    value: 1_000,
  },
];

export function decodedResistorValue(colorInputs: string[]): string {
  const [firstColor, secondColor, thirdColor] = colorInputs;

  const zerosCount = colors.indexOf(thirdColor);
  let value = parseInt(`${colors.indexOf(firstColor)}${colors.indexOf(secondColor)}${'0'.repeat(zerosCount)}`, 10);
  let unit = 'ohms';

  for (const prefix of prefixes) {
    if (value >= prefix.value) {
      value /= prefix.value;
      unit = `${prefix.unit}${unit}`;
      break;
    }
  }

  return `${value} ${unit}`;
}
