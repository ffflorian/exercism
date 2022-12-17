let usedNames: string[] = [];

export class Robot {
  private _name!: string;

  constructor() {
    this.resetName();
  }

  get name(): string {
    return this._name;
  }

  static releaseNames(): void {
    usedNames = [];
  }

  resetName(): void {
    this._name = this.generateName();
  }

  private generateName(): string {
    const randomString = () => String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    const randomNumber = Math.floor(Math.random() * 899) + 100;
    const name = `${randomString()}${randomString()}${randomNumber}`;

    if (!usedNames.includes(name)) {
      usedNames.push(name);
      return name;
    }

    return this.generateName();
  }
}
