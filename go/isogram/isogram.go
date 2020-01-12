package isogram

import "strings"

// IsIsogram determines if a word or phrase is an isogram.
func IsIsogram(input string) bool {
	known := make([]rune, len(input))
	array := []rune(strings.ToLower(input))

	for _, newRune := range array {
		for _, knownRune := range known {
			if knownRune == newRune {
				return false
			}
		}
		if newRune >= 97 && newRune <= 122 {
			known = append(known, newRune)
		}
	}

	return true
}
