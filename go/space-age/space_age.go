package space

// Planet is a definition for planet names
type Planet string

var planets = map[Planet]float64{
	"Mercury": 0.2408467,
	"Venus":   0.61519726,
	"Earth":   1.0,
	"Mars":    1.8808158,
	"Jupiter": 11.862615,
	"Saturn":  29.447498,
	"Uranus":  84.016846,
	"Neptune": 164.79132,
}

var yearOnEarth float64 = 315576000

// Age returns the space age for a planet
func Age(seconds float64, planet Planet) float64 {
	return (seconds / yearOnEarth / planets[planet]) * 10
}
