package space

import "fmt"

// Planet is a definition for planet names
type Planet string

var planets = map[Planet]float64{
	"Earth":   1000000000,
	"Jupiter": 901876382,
	"Mars":    2129871239,
	"Mercury": 2134835688,
	"Neptune": 1821023456,
	"Saturn":  2000000000,
	"Uranus":  1210123456,
	"Venus":   189839836,
}

var yearOnEarth float64 = 315576000

// Age returns the space age for a planet
func Age(seconds float64, planet Planet) float64 {
	fmt.Println("%d / %d / %d", planets[planet], seconds, yearOnEarth)
	return planets[planet] / seconds / yearOnEarth
}
