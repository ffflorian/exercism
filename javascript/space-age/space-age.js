module.exports = (seconds) => {
  const yearOnEarth = 31557600;

  const planets = {
    Earth: 1,
    Jupiter: 11.862615,
    Mars: 1.8808158,
    Mercury: 0.2408467,
    Neptune: 164.79132,
    Saturn: 29.447498,
    Uranus: 84.016846,
    Venus: 0.61519726,
  };

  return {seconds, ...(() => {
    return Object.keys(planets).reduce((list, planet) =>
      Object.assign(list, {
        [`on${planet}`]: () => {
          return parseFloat((seconds / yearOnEarth / planets[planet]).toFixed(2));
        },
      }),
    {});
  })()};
};
