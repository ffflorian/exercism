export class Squares {
  constructor(n) {
    this._n = n;
  }

  get sumOfSquares() {
    let result = 0;
    for (let i = 0; i <= this._n; i++) {
      result += i * i;
    }
    return result;
  }

  get squareOfSum() {
    let result = 0;
    for (let i = 0; i <= this._n; i++) {
      result += i;
    }
    return result * result;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
