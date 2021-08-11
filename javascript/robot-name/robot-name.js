//@ts-check

/** @type {Record<string, boolean>} */
let _usedNames = {};

export class Robot {
  constructor() {
    this.reset();
  }

  /**
   * @private
   * @returns {string}
   */
  _generateName() {
    const randomString = () => String.fromCharCode(Math.floor(Math.random() * 25) + 65);
    const num = Math.floor(Math.random() * 899) + 100;
    const name = `${randomString()}${randomString()}${num}`;

    if (typeof _usedNames[name] === 'undefined') {
      _usedNames[name] = true;
      return name;
    }

    return this._generateName();
  }

  static releaseNames() {
    _usedNames = {};
  }

  get name() {
    return this._name;
  }

  reset() {
    this._name = this._generateName();
  }
}
