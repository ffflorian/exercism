const _usedNames = {};

export class Robot {
  constructor() {
    reset()
  }

  _generateName() {
    const str = () => String.fromCharCode(Math.floor(Math.random() * 25) + 65);
    const num = Math.floor(Math.random() * 899) + 100;
    const name = str() + str() + num;
    if (typeof _usedNames[name] === 'undefined') {
      _usedNames[name] = true;
      return name;
    } else {
      return generateName();
    }
  }

  reset() {
    this.name = generateName();
  }
}
