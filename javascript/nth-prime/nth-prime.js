//@ts-check

/**
 * @param {number} candidate
 * @returns {boolean}
 */
const isPrime = candidate => {
  for (let primeIndex = 2; primeIndex <= Math.sqrt(candidate); primeIndex++) {
    if (candidate % primeIndex === 0) {
      return false;
    }
  }
  return candidate > 1;
};

/**
 * @param {number} n
 * @returns {number}
 */
export const prime = n => {
  if (n < 1) {
    throw new Error('there is no zeroth prime');
  }

  let foundPrimes = 0;
  let candidate = 1;

  while (foundPrimes < n) {
    candidate++;
    if (isPrime(candidate)) {
      foundPrimes++;
    }
  }

  return candidate;
};
