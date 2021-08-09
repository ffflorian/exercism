//@ts-check

export class GradeSchool {
  constructor() {
    /** @type {Record<number, string[]>} */
    this._roster = {};
  }

  /**
   * @returns {Record<number, string[]>}
   */
  roster() {
    return JSON.parse(JSON.stringify(this._roster));
  }

  /**
   * @param {string} name
   * @param {number} grade
   */
  add(name, grade) {
    if (typeof name !== 'string' || typeof grade !== 'number') {
      throw new Error('Invalid argument');
    }
    let entry = this._roster[grade];
    if (typeof entry === 'undefined') {
      entry = [];
    }
    entry.push(name);
    entry.sort();
    this._roster[grade] = entry;
  }

  /**
   * @param {number} grade
   * @returns {string[]}
   */
  grade(grade) {
    if (typeof grade !== 'number') {
      throw new Error('Invalid argument');
    }
    const entry = this._roster[grade];
    if (typeof entry === 'undefined') {
      return [];
    }
    return [...entry.sort()];
  }
}
