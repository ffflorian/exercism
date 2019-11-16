const outerCircle = 10;
const middleCircle = 5;
const innerCircle = 1;

export function solve(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    return null;
  }

  const radius = Math.sqrt(x ** 2 + y ** 2);

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
