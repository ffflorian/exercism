export class Matrix {
  constructor(input) {
    this._rows = this._convertRows(input);
    this._columns = this._convertColumns(this._rows);
  }

  _convertRows(input) {
    return input.split('\n').map(column => column.split(' ').map(number => parseInt(number)));
  }

  _convertColumns(rows) {
    return Object.keys(rows[0]).map(column => rows.map(row => row[column]));
  }

  get rows() {
    return this._rows;
  }

  get columns() {
    return this._columns;
  }
}
