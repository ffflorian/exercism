let usedNames: Record<string, boolean> = {};

export default class Robot {
  static releaseNames(): void {
    usedNames = {};
  }

  private _name!: string;

  constructor() {
    this.resetName();
  }

  get name(): string {
    return this._name;
  }

  resetName(): void {
    this._name = this._generateName();
  }

  private _generateName(): string {
    const randomString = () => String.fromCharCode(Math.floor(Math.random() * 25) + 65);
    const num = Math.floor(Math.random() * 899) + 100;
    const name = `${randomString()}${randomString()}${num}`;

    if (typeof usedNames[name] === 'undefined') {
      usedNames[name] = true;
      return name;
    }

    return this._generateName();
  }
}
