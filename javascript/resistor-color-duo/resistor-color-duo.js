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

export const decodedValue = colorInputs => {
  let result = '';

  for (let index = 0; index < 2; index++) {
    const colorInput = colorInputs[index];
    result += colors.indexOf(colorInput);
  }

  return parseInt(result);
};
