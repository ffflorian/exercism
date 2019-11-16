export class GradeSchool {
  constructor() {
    this._roster = {};
  }

  roster() {
    return JSON.parse(JSON.stringify(this._roster));
  }

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
