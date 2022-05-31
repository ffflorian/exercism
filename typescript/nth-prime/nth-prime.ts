function isPrime(candidate: number): boolean {
  for (let primeIndex = 2; primeIndex <= Math.sqrt(candidate); primeIndex++) {
    if (candidate % primeIndex === 0) {
      return false;
    }
  }
  return candidate > 1;
}

export function nth(n: number): number {
  if (n < 1) {
    throw new Error('Prime is not possible');
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
}
