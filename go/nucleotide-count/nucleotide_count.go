package dna

import "errors"

// Histogram is a mapping from nucleotide to its count in given DNA.
type Histogram map[rune]int

// DNA is a list of nucleotides.
type DNA string

// Counts generates a histogram of valid nucleotides in the given DNA.
func (d DNA) Counts() (Histogram, error) {
	var h Histogram = Histogram{'A': 0, 'C': 0, 'G': 0, 'T': 0}
	for _, char := range d {
		switch char {
		case 'A':
			h['A']++
			break
		case 'C':
			h['C']++
			break
		case 'G':
			h['G']++
			break
		case 'T':
			h['T']++
			break
		default:
			return Histogram{}, errors.New("Invalid DNA strand")
		}
	}
	return h, nil
}
