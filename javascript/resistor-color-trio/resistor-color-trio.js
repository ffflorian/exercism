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

export class ResistorColorTrio {
  constructor(colorInputs) {
    this.colorInputs = colorInputs;
  }

  get label() {
    const [firstColor, secondColor, thirdColor] = this.colorInputs;

    if (!colors.includes(firstColor) || !colors.includes(secondColor) || !colors.includes(thirdColor)) {
      throw new Error('invalid color');
    }

    const zerosCount = colors.indexOf(thirdColor);
    let value = `${colors.indexOf(firstColor)}${colors.indexOf(secondColor)}${'0'.repeat(zerosCount)}`;
    let unit = 'ohms';

    value = parseInt(value, 10);

    if (value >= 1000) {
      unit = `kilo${unit}`;
      value /= 1000;
    }

    return `Resistor value: ${value} ${unit}`;
  }
}
