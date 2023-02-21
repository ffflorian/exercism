//@ts-check

export class Squares {
  /**
   * @param {number} n
   */
  constructor(n) {
    /** @type {number} */
    this.n = n;
  }

  get sumOfSquares() {
    return (this.n * (this.n + 1) * (2 * this.n + 1)) / 6;
  }

  get squareOfSum() {
    return ((this.n * (this.n + 1)) / 2) * ((this.n * (this.n + 1)) / 2);
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
