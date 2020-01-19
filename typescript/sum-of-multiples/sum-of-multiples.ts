class SumOfMultiples {
  private readonly divisors: number[];

  constructor(multiples: number[]) {
    this.divisors = multiples;
  }

  to(limit: number): number {
    return this.divisors
      .reduce((result: number[], divisor) => {
        for (let candidate = 1; candidate < limit; candidate++) {
          if (candidate % divisor === 0 && !result.includes(candidate)) {
            result.push(candidate);
          }
        }
        return result;
      }, [])
      .reduce((result, candidate) => result + candidate, 0);
  }
}

function initialize(multiples: number[]): SumOfMultiples {
  return new SumOfMultiples(multiples);
}

export default initialize;
