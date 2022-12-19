export class Triangle {
  private readonly _rows: number[][];

  constructor(length: number) {
    this._rows = this._buildTriangle(length);
  }

  get lastRow(): number[] | undefined {
    return this.rows.pop();
  }

  get rows(): number[][] {
    return this._rows;
  }

  _buildTriangle(length: number): number[][] {
    const triangle: number[][] = [];
    for (let rowIndex = 0; rowIndex < length; rowIndex++) {
      triangle[rowIndex] = [];
      for (let leafIndex = 0; leafIndex <= rowIndex; leafIndex++) {
        triangle[rowIndex][leafIndex] =
          leafIndex === 0 || leafIndex === rowIndex
            ? 1
            : triangle[rowIndex - 1][leafIndex - 1] + triangle[rowIndex - 1][leafIndex];
      }
    }
    return triangle;
  }
}
