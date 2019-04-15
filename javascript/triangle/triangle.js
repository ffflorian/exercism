module.exports = class Triangle {
  constructor(sideA, sideB, sideC) {
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  kind() {
    if ((this.sideA * this.sideB * this.sideC <= 0) || (this.sideC > this.sideA + this.sideB || this.sideA > this.sideB + this.sideC || this.sideB > this.sideA + this.sideC)) {
      throw new Error('Invalid triangle');
    } else if (this.sideA === this.sideB && this.sideB === this.sideC) {
      return 'equilateral';
    } else if (this.sideA !== this.sideB && this.sideB !== this.sideC && this.sideC !== this.sideA) {
      return 'scalene';
    } else {
      return 'isosceles';
    }
  }
};
