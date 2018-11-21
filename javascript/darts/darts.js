//@ts-check

const outerCircle = 10;
const middleCircle = 5;
const middleCirclePoints = 5;
const innerCircle = 1;

const testCircles = (values, min, max) => values.some(value => value > min && value <= max);

function solve(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    return null;
  }

  if (x > outerCircle || y > outerCircle) {
    return 0;
  }

  if (testCircles([x, y], middleCircle, outerCircle)) {
    return 1;
  }

  if (testCircles([x, y], innerCircle, middleCircle)) {
    return middleCirclePoints;
  }

  return 10;
}

module.exports = {solve};
