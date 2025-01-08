package summultiples

// SumMultiples finds the sum of all the unique multiples of particular numbers up to but not including that number.
func SumMultiples(limit int, divisors ...int) int {
	var known []int
	result := 0

	for _, divisor := range divisors {
	KnownLoop:
		for candidate := 1; candidate < limit; candidate++ {
			if candidate%divisor == 0 {
				for _, known := range known {
					if divisor == known {
						continue KnownLoop
					}
				}
				result += candidate
				known = append(known, candidate)
			}
		}
	}

	return result
}
