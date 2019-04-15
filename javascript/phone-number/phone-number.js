module.exports = class PhoneNumber {
  constructor(phoneNumber) {
    this.phoneNumber = phoneNumber;
  }

  areaCode() {
    return (/^([0-9]){3}/).exec(this.phoneNumber)[0];
  }

  number() {
    if (this.phoneNumber.length === 11 && this.phoneNumber.match(/^1/) !== null) {
      return (/^.([0-9]*)/).exec(this.phoneNumber)[1];
    } else if (this.phoneNumber.match(/^[0-9]+$/) === null && (this.phoneNumber.length > 9 || this.phoneNumber.length <= 10)) {
      return this.phoneNumber.replace(/[^0-9]/g, '');
    }
    return '0000000000';
  }

  toString() {
    return this.phoneNumber.replace(/([0-9]{3})([0-9]{3})([0-9]{3})/, '($1) $2-$3');
  }
};
