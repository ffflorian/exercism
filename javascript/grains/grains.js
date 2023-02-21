//@ts-check

const BigInt = require('./lib/big-integer');

/**
 * @param {number} num
 * @returns {string}
 */
export function square(num) {
  if (num < 1 || num > 64) {
    throw new Error('square must be between 1 and 64');
  }

  return BigInt(2)
    .pow(num - 1)
    .toString();
}

/**
 * @returns {string}
 */
export function total() {
  return BigInt(2).pow(64).prev().toString();
}
