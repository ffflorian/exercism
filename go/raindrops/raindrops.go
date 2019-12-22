package raindrops

import "fmt"

// Convert converts a number into a string that contains raindrop sounds
func Convert(input int) string {
	result := ""

	if input%3 == 0 {
		result += "Pling"
	}

	if input%5 == 0 {
		result += "Plang"
	}

	if input%7 == 0 {
		result += "Plong"
	}

	if len(result) == 0 {
		result = fmt.Sprintf("%d", input)
	}

	return result
}
