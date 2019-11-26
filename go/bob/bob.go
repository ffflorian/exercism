package bob

import "strings"

// Hey returns Bob's answer
func Hey(remark string) string {
	input := strings.TrimSpace(remark)

	if len(input) == 0 {
		return "Fine. Be that way!"
	}

	if input == strings.ToUpper(input) && strings.ToUpper(input) != strings.ToLower(input) {
		if strings.HasSuffix(input, "?") {
			return "Calm down, I know what I'm doing!"
		}
		return "Whoa, chill out!"
	}

	if strings.HasSuffix(input, "?") {
		return "Sure."
	}

	return "Whatever."
}
