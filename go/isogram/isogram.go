package isogram

import (
	"strings"
	"unicode"
)

// IsIsogram determines if a word or phrase is an isogram.
func IsIsogram(input string) bool {
	input = strings.ToUpper(input)

	for _, char := range input {
		if unicode.IsLetter(char) && strings.Count(input, string(char)) > 1 {
			return false
		}
	}

	return true
}
