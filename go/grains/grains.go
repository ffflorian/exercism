package grains

import (
	"errors"
	"math"
)

// Square returns how many grains were on a given square
func Square(num int) (uint64, error) {
	if num < 1 || num > 64 {
		return 0, errors.New("Invalid input")
	}

	return uint64(math.Pow(2, float64(num-1))), nil
}

// Total returns the total number of grains on the chessboard
func Total() uint64 {
	return math.MaxUint64
}
