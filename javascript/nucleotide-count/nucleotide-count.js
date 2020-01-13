export class NucleotideCounts {
  static parse(strand) {
    if (!/^[ACGT]*$/.test(strand)) {
      throw new Error('Invalid nucleotide in strand');
    }

    const adenineCount = (strand.match(/[A]/g) || []).length;
    const cytosineCount = (strand.match(/[C]/g) || []).length;
    const guanineCount = (strand.match(/[G]/g) || []).length;
    const thymineCount = (strand.match(/[T]/g) || []).length;

    return `${adenineCount} ${cytosineCount} ${guanineCount} ${thymineCount}`;
  }
}
