/**
 * @param {number} length
 */
export function rows(length) {
  /** @type {number[][]} */
  const triangle = [];
  for (let rowIndex = 0; rowIndex < length; rowIndex++) {
    triangle[rowIndex] = [];
    for (let leafIndex = 0; leafIndex <= rowIndex; leafIndex++) {
      if (leafIndex === 0 || leafIndex === rowIndex) {
        triangle[rowIndex][leafIndex] = 1;
      } else {
        triangle[rowIndex][leafIndex] = triangle[rowIndex - 1][leafIndex - 1] + triangle[rowIndex - 1][leafIndex];
      }
    }
  }
  return triangle;
}
