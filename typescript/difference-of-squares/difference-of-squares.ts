export default class Squares {
  private readonly n: number;

  constructor(n: number) {
    this.n = n;
  }

  get sumOfSquares(): number {
    return (this.n * (this.n + 1) * (2 * this.n + 1)) / 6;
  }

  get squareOfSum(): number {
    return ((this.n * (this.n + 1)) / 2) * ((this.n * (this.n + 1)) / 2);
  }

  get difference(): number {
    return this.squareOfSum - this.sumOfSquares;
  }
}
