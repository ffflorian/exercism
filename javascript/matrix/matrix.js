//@ts-check

export class Matrix {
  /**
   * @param {string} input
   */
  constructor(input) {
    /**
     * @private
     * @type {number[][]}
     */
    this._rows = this._convertRows(input);
    /**
     * @private
     * @type {number[][]}
     */
    this._columns = this._convertColumns(this._rows);
  }

  /**
   * @param {string} input
   * @returns {number[][]}
   */
  _convertRows(input) {
    return input.split('\n').map(column => column.split(' ').map(number => parseInt(number)));
  }

  /**
   * @param {number[][]} rows
   * @returns {number[][]}
   */
  _convertColumns(rows) {
    return rows[0].map((_, columnIndex) => rows.map(row => row[columnIndex]));
  }

  get rows() {
    return this._rows;
  }

  get columns() {
    return this._columns;
  }
}
