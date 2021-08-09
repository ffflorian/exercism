//@ts-check

const outerCircle = 10;
const middleCircle = 5;
const innerCircle = 1;

/**
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
export function score(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    return null;
  }

  const radius = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

  if (radius <= innerCircle) {
    return 10;
  }

  if (radius <= middleCircle) {
    return 5;
  }

  if (radius <= outerCircle) {
    return 1;
  }

  return 0;
}
