package romannumerals

import "errors"

type dictMap struct {
	arabicNumber int
	romanNumber  string
}

var romanNumeralDict = []dictMap{
	{1000, "M"},
	{900, "CM"},
	{500, "D"},
	{400, "CD"},
	{100, "C"},
	{90, "XC"},
	{50, "L"},
	{40, "XL"},
	{10, "X"},
	{9, "IX"},
	{5, "V"},
	{4, "IV"},
	{1, "I"},
}

// ToRomanNumeral converts arabic numbers to roman numerals.
func ToRomanNumeral(num int) (string, error) {
	if num < 1 || num > 3000 {
		return "", errors.New("Invalid number provided")
	}

	result := ""

	for _, entry := range romanNumeralDict {
		for num >= entry.arabicNumber {
			result += entry.romanNumber
			num -= entry.arabicNumber
		}
	}

	return result, nil
}
