package perfect

import (
	"errors"
	"math"
)

// Classification describes the number classification
type Classification int

// ErrOnlyPositive describes an error for negative numbers
var ErrOnlyPositive = errors.New("Classification is only possible for natural numbers")

const (
	// ClassificationPerfect describes that the number is perfect
	ClassificationPerfect Classification = iota
	// ClassificationAbundant describes that the number is abundant
	ClassificationAbundant
	// ClassificationDeficient describes that the number is deficient
	ClassificationDeficient
)

// Classify determines if a number is perfect, abundant, or deficient
func Classify(input int64) (Classification, error) {
	if input < 1 {
		return -1, ErrOnlyPositive
	}

	var result int64 = 0
	var i int64
	var maxDivisor = int64(math.Floor(float64(input) / 2))

	for i = 1; i <= maxDivisor; i++ {
		if input%i == 0 {
			result += i
		}
	}

	if result == input {
		return ClassificationPerfect, nil
	}

	if result > input {
		return ClassificationAbundant, nil
	}

	return ClassificationDeficient, nil
}
