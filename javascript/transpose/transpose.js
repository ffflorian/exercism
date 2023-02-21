function trimTrailing(array) {
  const trailingUndefinedCount = [...array].reverse().findIndex(element => element !== undefined);
  return array.slice(0, array.length - trailingUndefinedCount);
}

export const transpose = lines => {
  const longestLine = Math.max(0, ...lines.map(line => line.length));
  return [...Array(longestLine).keys()].map(col =>
    trimTrailing(lines.map((_, row) => lines[row][col]))
      .map(char => char || ' ')
      .join('')
  );
};
