export default class Triangle {
  private readonly a: number;
  private readonly b: number;
  private readonly c: number;

  constructor(a: number, b: number, c: number) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  kind(): 'equilateral' | 'scalene' | 'isosceles' {
    if (
      this.a * this.b * this.c <= 0 ||
      this.c > this.a + this.b ||
      this.a > this.b + this.c ||
      this.b > this.a + this.c
    ) {
      throw new Error('Degenerate triangle');
    }

    if (this.a === this.b && this.b === this.c) {
      return 'equilateral';
    }

    if (this.a !== this.b && this.b !== this.c && this.c !== this.a) {
      return 'scalene';
    }

    return 'isosceles';
  }
}
