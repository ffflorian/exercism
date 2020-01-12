package triangle

import "math"

// Kind defines the kind of triangle
type Kind string

const (
	// NaT defines not a triangle
	NaT Kind = "Not a triangle"
	// Equ defines an equilateral triangle
	Equ Kind = "equilateral"
	// Iso defines an isosceles triangle
	Iso Kind = "isosceles"
	// Sca defines an scalene triangle
	Sca Kind = "scalene"
)

// KindFromSides should have a comment documenting it.
func KindFromSides(a, b, c float64) Kind {
	if math.IsNaN(a) ||
		math.IsNaN(b) ||
		math.IsNaN(c) ||
		math.IsInf(a, 1) ||
		math.IsInf(b, 1) ||
		math.IsInf(c, 1) {
		return NaT
	}

	if a*b*c <= 0 || c > a+b || a > b+c || b > a+c {
		return NaT
	}

	if a == b && b == c {
		return Equ
	}

	if a != b && b != c && c != a {
		return Sca
	}

	return Iso
}
