package strand

var rnaMap = map[string]string{
	"G": "C",
	"C": "G",
	"T": "A",
	"A": "U",
}

// ToRNA returns the RNA complement of a DNA strand (per RNA transcription).
func ToRNA(dna string) string {
	result := ""
	for _, char := range dna {
		result += rnaMap[string(char)]
	}
	return result
}
