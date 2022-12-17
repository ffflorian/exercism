export class Series {
  constructor(series) {
    this.series = series;
  }

  get digits() {
    return this.series.split('').map(Number);
  }

  slices(sliceSize) {
    if (!this.series) {
      throw new Error('series cannot be empty');
    }

    if (sliceSize === 0) {
      throw new Error('slice length cannot be zero');
    }

    if (sliceSize < 0) {
      throw new Error('slice length cannot be negative');
    }

    if (sliceSize > this.digits.length) {
      throw new Error('slice length cannot be greater than series length');
    }

    return this.digits
      .slice(0, -sliceSize + 1 || this.digits.length)
      .map((_element, index) => this.digits.slice(index, index + sliceSize));
  }
}
