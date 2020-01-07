export class Series {
  constructor(series) {
    this.series = series;
  }

  get digits() {
    return this.series.split('').map(Number);
  }

  slices(sliceSize) {
    if (sliceSize > this.digits.length) {
      throw new Error('Slice size is too big.');
    }

    return this.digits
      .slice(0, -sliceSize + 1 || this.digits.length)
      .map((_element, index) => this.digits.slice(index, index + sliceSize));
  }
}
