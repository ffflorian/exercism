package strand

import "strings"

var rnaMap = map[string]string{
	"G": "C",
	"C": "G",
	"T": "A",
	"A": "U",
}

// ToRNA returns the RNA complement of a DNA strand (per RNA transcription).
func ToRNA(dna string) string {
	rna := make([]string, len(dna))
	for i, char := range dna {
		rna[i] = rnaMap[string(char)]
	}
	return strings.Join(rna, "")
}
