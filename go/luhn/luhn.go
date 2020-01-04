package luhn

import (
	"regexp"
	"strconv"
	"strings"
)

// Valid determines whether or not the input is valid per the Luhn formula.
func Valid(ccnumber string) bool {
	ccRegExp := regexp.MustCompile(`^\d[\d ]+$`)

	if !ccRegExp.MatchString(ccnumber) {
		return false
	}

	ccnumberArray := strings.Split(strings.Replace(ccnumber, " ", "", -1), "")
	nDigits := len(ccnumberArray)
	parity := nDigits % 2
	sum, _ := strconv.Atoi(ccnumberArray[nDigits-1])

	for i := 0; i < nDigits-1; i++ {
		digit, _ := strconv.Atoi(ccnumberArray[i])
		if i%2 == parity {
			digit *= 2
		}
		if digit > 9 {
			digit -= 9
		}
		sum += digit
	}

	return (sum % 10) == 0
}
