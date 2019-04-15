module.exports = () => {
  const _roster = {};

  return {
    add (name, grade) {
      if (typeof name !== 'string' || typeof grade !== 'number') {
        throw 'Invalid argument';
      }
      let entry = _roster[grade];
      if (typeof entry === 'undefined') {
        entry = [];
      }
      entry.push(name);
      entry.sort();
      _roster[grade] = entry;
    },
    grade (grade) {
      if (typeof grade !== 'number') {
        throw 'Invalid argument';
      }
      const entry = _roster[grade];
      if (typeof entry === 'undefined') {
        return [];
      }
      return entry.sort();
    },
    roster () {
      return _roster;
    },
  };
};
