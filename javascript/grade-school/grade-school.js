export class GradeSchool {
  constructor() {
    /**
     * @type {Record<number, string[]>}
     * @private
     * @readonly
     */
    this._roster = {};
  }

  /**
   * @param {string} name
   * @param {number} grade
   */
  add(name, grade) {
    for (const gradeIndex in this._roster) {
      const nameIndex = this._roster[gradeIndex].findIndex(entry => entry === name);
      if (nameIndex !== -1) {
        this._roster[gradeIndex].splice(nameIndex);
      }
    }

    const entries = this._roster[grade] || [];
    entries.push(name);
    this._roster[grade] = entries.sort();
  }

  /**
   * @param {number} grade
   * @returns {string[]}
   */
  grade(grade) {
    const entry = this._roster[grade];
    if (typeof entry === 'undefined') {
      return [];
    }
    return [...entry.sort()];
  }

  /**
   * @returns {Record<number, string[]> }
   */
  roster() {
    return JSON.parse(JSON.stringify(this._roster));
  }
}
