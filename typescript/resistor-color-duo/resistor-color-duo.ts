// tslint:disable-next-line
const colors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

export function decodedValue(colorInputs: string[]): number {
  if (colorInputs.length < 2) {
    throw new Error('At least two colors need to be present');
  }

  const [firstColor, secondColor] = colorInputs;
  const value = `${colors.indexOf(firstColor)}${colors.indexOf(secondColor)}`;
  return parseInt(value, 10);
}
