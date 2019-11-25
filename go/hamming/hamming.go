package hamming

import "errors"

// Distance calculates the Hamming Distance between two DNA strands.
func Distance(a, b string) (int, error) {
	if a == "" && b != "" {
		return 0, errors.New("left strand must not be empty")
	}

	if a != "" && b == "" {
		return 0, errors.New("right strand must not be empty")
	}

	if len(a) != len(b) {
		return 0, errors.New("left and right strands must be of equal length")
	}

	var diff = 0

	for i := 0; i < len(a); i++ {
		if a[i] != b[i] {
			diff++
		}
	}

	return diff, nil
}
