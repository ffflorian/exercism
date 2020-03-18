export default class Matrix {
  private readonly _columns: number[][];
  private readonly _rows: number[][];

  constructor(input: string) {
    this._rows = this._convertRows(input);
    this._columns = this._convertColumns(this._rows);
  }

  get columns(): number[][] {
    return this._columns;
  }

  get rows(): number[][] {
    return this._rows;
  }

  _convertColumns(rows: number[][]): number[][] {
    return rows[0].map((_, columnIndex) => rows.map(row => row[columnIndex]));
  }

  _convertRows(input: string): number[][] {
    return input.split('\n').map(column => column.split(' ').map(number => parseInt(number)));
  }
}
