export default class Luhn {
  static valid(ccnumber: string): boolean {
    if (!/^\d[\d ]+$/.test(ccnumber)) {
      return false;
    }

    const ccnumberArray = ccnumber
      .replace(/ /g, '')
      .split('')
      .map(digit => parseInt(digit, 10));

    const digitsCount = ccnumberArray.length;
    const parity = digitsCount % 2;
    let sum = ccnumberArray[digitsCount - 1];

    for (let i = 0; i < digitsCount - 1; i++) {
      let digit = ccnumberArray[i];
      if (i % 2 === parity) {
        digit *= 2;
      }
      if (digit > 9) {
        digit = digit - 9;
      }
      sum += digit;
    }

    return sum % 10 === 0;
  }
}
