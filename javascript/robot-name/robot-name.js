const _usedNames = {};

module.exports = class RobotName {
  constructor() {
    this.name = this.generateName();
  }

  generateName() {
    const str = () => String.fromCharCode(Math.floor(Math.random() * 25) + 65);
    const num = Math.floor(Math.random() * 899) + 100;
    const name = str() + str() + num;
    if (typeof _usedNames[name] === 'undefined') {
      _usedNames[name] = true;
      return name;
    }
    return this.generateName();
  };

  reset() {
    this.name = this.generateName();
  }
};
