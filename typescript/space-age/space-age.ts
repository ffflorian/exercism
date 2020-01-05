interface Planets {
  earth: number;
  jupiter: number;
  mars: number;
  mercury: number;
  neptune: number;
  saturn: number;
  uranus: number;
  venus: number;
}

export default class SpaceAge {
  public readonly seconds: number;
  private readonly planets: Planets = {
    earth: 1,
    jupiter: 11.862615,
    mars: 1.8808158,
    mercury: 0.2408467,
    neptune: 164.79132,
    saturn: 29.447498,
    uranus: 84.016846,
    venus: 0.61519726,
  };
  private readonly yearOnEarth = 31557600;

  constructor(seconds: number) {
    this.seconds = seconds;
  }

  onEarth(): number {
    return this.age('earth');
  }

  onJupiter(): number {
    return this.age('jupiter');
  }

  onMars(): number {
    return this.age('mars');
  }

  onMercury(): number {
    return this.age('mercury');
  }

  onNeptune(): number {
    return this.age('neptune');
  }

  onSaturn(): number {
    return this.age('saturn');
  }

  onUranus(): number {
    return this.age('uranus');
  }

  onVenus(): number {
    return this.age('venus');
  }

  private age(planet: keyof Planets): number {
    return parseFloat((this.seconds / this.yearOnEarth / this.planets[planet]).toFixed(2));
  }
}
