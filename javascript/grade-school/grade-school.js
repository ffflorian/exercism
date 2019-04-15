module.exports = class School {
  constructor() {
    this._roster = {};
  }

  add(name, grade) {
    if (typeof name !== 'string' || typeof grade !== 'number') {
      throw 'Invalid argument';
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
      throw 'Invalid argument';
    }
    const entry = this._roster[grade];
    if (typeof entry === 'undefined') {
      return [];
    }
    return entry.sort();
  }

  roster() {
    return this._roster;
  }
};
