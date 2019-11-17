export class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  kind() {
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
