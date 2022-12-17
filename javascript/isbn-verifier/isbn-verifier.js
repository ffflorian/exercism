//@ts-check

/**
 * @param {string} input
 * @returns {boolean}
 */
export const isValid = input => {
  const withoutDashes = input.replace(/-/g, '');

  if (!/^\d{0,9}[\dX]$/.test(withoutDashes)) {
    return false;
  }

  const digits = [...withoutDashes].map(digit => (digit === 'X' ? 10 : Number(digit)));

  let remainder = 0;
  let sum = 0;

  for (let i = 0; i < 10; i++) {
    remainder += digits[i];
    sum += remainder;
  }

  return sum % 11 === 0;
};
