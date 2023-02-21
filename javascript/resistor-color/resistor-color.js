const originalColors = ['Black', 'Brown', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Grey', 'White'];

export const colorCode = color => COLORS.indexOf(color);
export const COLORS = originalColors.map(colorName => colorName.toLowerCase());
