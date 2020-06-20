export class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;

    if (
      this.a * this.b * this.c <= 0 ||
      this.c > this.a + this.b ||
      this.a > this.b + this.c ||
      this.b > this.a + this.c
    ) {
      return
    }

    if (this.a !== this.b && this.b !== this.c && this.c !== this.a) {
      this.scalene = true;
      return
    }

    if (this.a === this.b && this.b === this.c) {
      this.equilateral = true;
    }

    this.isosceles = true;
  }

  isScalene() {
    return !!this.scalene;
  }

  isIsosceles() {
    return !!this.isosceles;
  }

  isEquilateral() {
    return !!this.equilateral;
  }
}
