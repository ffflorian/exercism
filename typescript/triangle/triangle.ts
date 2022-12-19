export class Triangle {
  private readonly a: number;
  private readonly b: number;
  private readonly c: number;

  constructor(a: number, b: number, c: number) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  get isEquilateral(): boolean {
    return this.isTriangle && this.a === this.b && this.b === this.c;
  }

  get isIsosceles(): boolean {
    return this.isTriangle && !this.isScalene;
  }

  get isScalene(): boolean {
    return this.isTriangle && this.a !== this.b && this.b !== this.c && this.c !== this.a;
  }

  private get isDegenerate(): boolean {
    return this.a + this.b === this.c || this.b + this.c === this.a || this.a + this.c === this.b;
  }

  private get isTriangle(): boolean {
    return (
      this.a * this.b * this.c > 0 &&
      this.a + this.b >= this.c &&
      this.b + this.c >= this.a &&
      this.a + this.c >= this.b &&
      !this.isDegenerate
    );
  }
}
