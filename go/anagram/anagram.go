package anagram

import (
	"sort"
	"strings"
)

// Detect selects a sublist of anagrams of the given word.
func Detect(subject string, candidates []string) []string {
	var anagrams []string
	subjectLower := strings.ToLower(subject)

	for _, candidate := range candidates {
		candidateLower := strings.ToLower(candidate)
		if subjectLower != candidateLower && sortWord(subjectLower) == sortWord(candidateLower) {
			anagrams = append(anagrams, candidate)
		}
	}

	return anagrams
}

func sortWord(word string) string {
	split := strings.Split(word, "")
	sort.Strings(split)
	return strings.Join(split, "")
}
