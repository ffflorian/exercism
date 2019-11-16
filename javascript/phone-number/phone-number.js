export class PhoneNumber {
  constructor(_number) {
    this._number = _number;
  }

  number() {
    if (this._number.length === 11 && this._number.match(/^1/) !== null) {
      return /^.([0-9]*)/.exec(this._number)[1];
    } else if (this._number.match(/^[0-9]+$/) === null && (this._number.length > 9 || this._number.length <= 10)) {
      return this._number.replace(/[^0-9]/g, '');
    }
    return '0000000000';
  }

  areaCode() {
    return /^([0-9]){3}/.exec(this._number)[0];
  }

  toString() {
    return this._number.replace(/([0-9]{3})([0-9]{3})([0-9]{3})/, '($1) $2-$3');
  }
}
