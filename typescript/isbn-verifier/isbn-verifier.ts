export default class ISBN {
  private readonly input: string;

  constructor(input: string) {
    this.input = input;
  }

  isValid(): boolean {
    const withoutDashes = this.input.replace(/-/g, '');

    if (!/^\d{0,9}[\dX]$/.test(withoutDashes)) {
      return false;
    }

    const digits = withoutDashes.split('').map(digit => (digit === 'X' ? 10 : Number(digit)));

    let remainder = 0;
    let sum = 0;

    for (let i = 0; i < 10; i++) {
      remainder += digits[i];
      sum += remainder;
    }

    return sum % 11 === 0;
  }
}
