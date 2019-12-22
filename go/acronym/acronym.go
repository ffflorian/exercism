package acronym

import (
	"regexp"
	"strings"
)

// Abbreviate returns an abbreviation for a string (e.g. Portable Network Graphics -> PNG).
func Abbreviate(s string) string {
	lettersRegExp := regexp.MustCompile(`(?:^|\s|-)_?(\w)`)
	matches := lettersRegExp.FindAllStringSubmatch(s, -1)
	result := ""

	for _, letter := range matches {
		result += strings.ToUpper(letter[1])
	}

	return result
}
