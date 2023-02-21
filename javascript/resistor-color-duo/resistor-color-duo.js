const colors = ['Black', 'Brown', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Grey', 'White'].map(color =>
  color.toLowerCase()
);

export const decodedValue = colorInputs => {
  const [firstColor, secondColor] = colorInputs;
  const value = `${colors.indexOf(firstColor)}${colors.indexOf(secondColor)}`;
  return parseInt(value, 10);
};
