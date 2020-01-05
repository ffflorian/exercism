export default class PhoneNumber {
  private readonly _number: string;

  constructor(number: string) {
    this._number = number;
  }

  number(): string | undefined {
    const match = this._number.replace(/\D/g, '').match(/^1?([2-9]\d{2}[2-9]\d{6})$/);
    return match ? match[1] : undefined;
  }
}
