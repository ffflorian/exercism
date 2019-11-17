export class PhoneNumber {
  constructor(number = '') {
    this.number = number;
  }

  _number() {
    const match = this.number.replace(/[^0-9]/g, '').match(/^1?([2-9]\d{2}[2-9]\d{6})$/);
    return match ? match[1] : null;
  }

  areaCode() {
    return /^(\d){3}/.exec(this.number)[0];
  }

  toString() {
    return this.number.replace(/(\d{3})(\d{3})(\d{3})/, '($1) $2-$3');
  }
}
