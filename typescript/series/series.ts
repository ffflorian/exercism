export class Series {
  private readonly series: string;

  constructor(series: string) {
    this.series = series;
  }

  get digits(): number[] {
    return [...this.series].map(Number);
  }

  slices(sliceSize: number): number[][] {
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
