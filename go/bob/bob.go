package bob

import "strings"

// Hey returns Bob's answer
func Hey(remark string) string {
	remark = strings.TrimSpace(remark)

	if len(remark) == 0 {
		return "Fine. Be that way!"
	}

	if remark == strings.ToUpper(remark) && strings.ToUpper(remark) != strings.ToLower(remark) {
		if strings.HasSuffix(remark, "?") {
			return "Calm down, I know what I'm doing!"
		}
		return "Whoa, chill out!"
	}

	if strings.HasSuffix(remark, "?") {
		return "Sure."
	}

	return "Whatever."
}
