export default class CollatzConjecture {
  static steps(n: number, i: number = 0): number {
    if (n < 1) {
      throw new Error('Only positive numbers are allowed');
    }

    if (n === 1) {
      return i;
    }

    return CollatzConjecture.steps(n % 2 === 0 ? n / 2 : 3 * n + 1, ++i);
  }
}
