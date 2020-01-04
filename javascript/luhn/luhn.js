export const valid = ccnumber => {
  if (!/^\d[\d ]+$/.test(ccnumber)) {
    return false;
  }

  ccnumber = ccnumber
    .replace(/ /g, '')
    .split('')
    .map(digit => parseInt(digit, 10));

  const digitsCount = ccnumber.length;
  const parity = digitsCount % 2;
  let sum = ccnumber[digitsCount - 1];

  for (let i = 0; i < digitsCount - 1; i++) {
    let digit = ccnumber[i];
    if (i % 2 === parity) {
      digit *= 2;
    }
    if (digit > 9) {
      digit = digit - 9;
    }
    sum += digit;
  }

  return sum % 10 === 0;
};
