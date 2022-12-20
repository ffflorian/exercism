export class Triangle {
  /**
   *
   * @param {number} a
   * @param {number} b
   * @param {number} c
   */
  constructor(a, b, c) {
    /**
     * @type {string}
     */
    this.a = a;
    /**
     * @type {string}
     */
    this.b = b;
    /**
     * @type {string}
     */
    this.c = c;
  }

  /**
   * @returns {boolean}
   */
  get isEquilateral() {
    return this._isTriangle && this.a === this.b && this.b === this.c;
  }

  /**
   * @returns {boolean}
   */
  get isIsosceles() {
    return this._isTriangle && !this.isScalene;
  }

  /**
   * @returns {boolean}
   */
  get isScalene() {
    return this._isTriangle && this.a !== this.b && this.b !== this.c && this.c !== this.a;
  }

  /**
   * @returns {boolean}
   * @private
   */
  get _isDegenerate() {
    return this.a + this.b === this.c || this.b + this.c === this.a || this.a + this.c === this.b;
  }

  /**
   * @returns {boolean}
   * @private
   */
  get _isTriangle() {
    return (
      this.a * this.b * this.c > 0 &&
      this.a + this.b >= this.c &&
      this.b + this.c >= this.a &&
      this.a + this.c >= this.b &&
      !this._isDegenerate
    );
  }
}
