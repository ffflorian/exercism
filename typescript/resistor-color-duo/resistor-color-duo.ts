export default class ResistorColor {
  private readonly colorInputs: string[];
  private readonly colors: string[];

  constructor(colorInputs: string[]) {
    // tslint:disable-next-line
    this.colors = [
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
    ].map(color => color.toLowerCase());

    this.colorInputs = colorInputs;

    if (this.colorInputs.length < 2) {
      throw new Error('At least two colors need to be present');
    }
  }

  value(): number {
    const [firstColor, secondColor] = this.colorInputs;
    const value = `${this.colors.indexOf(firstColor)}${this.colors.indexOf(secondColor)}`;
    return parseInt(value, 10);
  }
}
