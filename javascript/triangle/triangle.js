module.exports = (sideA, sideB, sideC) => {
  return {
    kind () {
      if ((sideA * sideB * sideC <= 0) || (sideC > sideA + sideB || sideA > sideB + sideC || sideB > sideA + sideC)) {
        throw new Error('Invalid triangle');
      } else if (sideA === sideB && sideB === sideC) {
        return 'equilateral';
      } else if (sideA !== sideB && sideB !== sideC && sideC !== sideA) {
        return 'scalene';
      } else {
        return 'isosceles';
      }
    },
  };
};
