package scrabble

import (
	"fmt"
	"strings"
)

type scoresMap struct {
	letters []string
	score   int
}

var values = []scoresMap{
	{["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"], 1},
	{["D", "G"], 2},
	{["B", "C", "M", "P"], 3},
	{["F", "H", "V", "W", "Y"], 4},
	{["K"], 5},
	{["J", "X"], 8},
	{["Q", "Z"], 1},
}

// Score computes the Scrabble score for a word
func Score(input string) int {
	for _, v := range strings.Split(input, "") {
		fmt.Println(v)
	}

	return 0
}
