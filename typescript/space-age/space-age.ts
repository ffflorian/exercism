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

const planets: Planets = {
  earth: 1,
  jupiter: 11.862615,
  mars: 1.8808158,
  mercury: 0.2408467,
  neptune: 164.79132,
  saturn: 29.447498,
  uranus: 84.016846,
  venus: 0.61519726,
};

const yearOnEarth = 31557600;

export function age(planet: keyof Planets, seconds: number): number {
  return parseFloat((seconds / yearOnEarth / planets[planet]).toFixed(2));
}
