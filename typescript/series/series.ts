export default class Series {
  private readonly series: string;

  constructor(series: string) {
    this.series = series;
  }

  get digits(): number[] {
    return [...this.series].map(Number);
  }

  slices(sliceSize: number): number[][] {
    if (sliceSize > this.digits.length) {
      throw new Error('Slice size is too big.');
    }

    return this.digits
      .slice(0, -sliceSize + 1 || this.digits.length)
      .map((_element, index) => this.digits.slice(index, index + sliceSize));
  }
}
