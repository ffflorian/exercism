package scrabble

import "strings"

type scoresMap struct {
	letters []string
	score   int
}

var values = []scoresMap{
	{[]string{"A", "E", "I", "O", "U", "L", "N", "R", "S", "T"}, 1},
	{[]string{"D", "G"}, 2},
	{[]string{"B", "C", "M", "P"}, 3},
	{[]string{"F", "H", "V", "W", "Y"}, 4},
	{[]string{"K"}, 5},
	{[]string{"J", "X"}, 8},
	{[]string{"Q", "Z"}, 10},
}

// Score computes the Scrabble score for a word
func Score(input string) int {
	score := 0

	for _, letter := range strings.Split(strings.ToUpper(input), "") {
		for _, scoreValue := range values {
			for _, scoreLetter := range scoreValue.letters {
				if scoreLetter == letter {
					score += scoreValue.score
					break
				}
			}
		}
	}

	return score
}
