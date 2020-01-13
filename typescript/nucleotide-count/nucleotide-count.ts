export interface Histogram {
  A: number;
  C: number;
  G: number;
  T: number;
}

export default class NucleotideCounts {
  static nucleotideCounts(strand: string): Histogram {
    if (!/^[ACGT]*$/.test(strand)) {
      throw new Error('Invalid nucleotide in strand');
    }

    const adenineCount = (strand.match(/[A]/g) || []).length;
    const cytosineCount = (strand.match(/[C]/g) || []).length;
    const guanineCount = (strand.match(/[G]/g) || []).length;
    const thymineCount = (strand.match(/[T]/g) || []).length;

    return {A: adenineCount, C: cytosineCount, G: guanineCount, T: thymineCount};
  }
}
