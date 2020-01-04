export default class Grains {
  static square(num: number): number {
    if (num < 1 || num > 64) {
      throw new Error('Invalid input');
    }

    return Math.pow(2, num - 1);
  }

  static total(): number {
    return Math.pow(2, 64);
  }
}
