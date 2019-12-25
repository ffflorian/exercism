export class Triangle {
  constructor(length) {
    this._rows = this._buildTriangle(length);
  }

  _buildTriangle(length) {
    const triangle = [];
    for (let rowIndex = 0; rowIndex < length; rowIndex++) {
      triangle[rowIndex] = [];
      for (let leafIndex = 0; leafIndex <= rowIndex; leafIndex++) {
        if (leafIndex === 0 || leafIndex === rowIndex) {
          triangle[rowIndex][leafIndex] = 1;
        } else {
          triangle[rowIndex][leafIndex] = triangle[rowIndex - 1][leafIndex - 1] + triangle[rowIndex - 1][leafIndex];
        }
      }
    }
    return triangle;
  }

  get lastRow() {
    return this.rows.pop();
  }

  get rows() {
    return this._rows;
  }
}
