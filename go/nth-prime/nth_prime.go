package prime

import "math"

// Nth returns the nth prime number
func Nth(n int) (int, bool) {
	if n < 1 {
		return 0, false
	}

	foundPrimes := 0
	candidate := 1

	for foundPrimes < n {
		candidate++
		if isPrime(candidate) {
			foundPrimes++
		}
	}

	return candidate, true
}

func isPrime(candidate int) bool {
	for i := 2; i <= int(math.Sqrt(float64(candidate))); i++ {
		if candidate%i == 0 {
			return false
		}
	}
	return candidate > 1
}
