export default class Prime {
  nth(n: number): number {
    if (n < 1) {
      throw new Error('Prime is not possible');
    }

    let foundPrimes = 0;
    let candidate = 1;

    while (foundPrimes < n) {
      candidate++;
      if (this.isPrime(candidate)) {
        foundPrimes++;
      }
    }

    return candidate;
  }

  private isPrime(candidate: number): boolean {
    for (let primeIndex = 2; primeIndex <= Math.sqrt(candidate); primeIndex++) {
      if (candidate % primeIndex === 0) {
        return false;
      }
    }
    return candidate > 1;
  }
}
