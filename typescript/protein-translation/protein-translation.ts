const sequences: Array<[string[], string]> = [
  [['AUG'], 'Methionine'],
  [['UUU', 'UUC'], 'Phenylalanine'],
  [['UUA', 'UUG'], 'Leucine'],
  [['UCU', 'UCC', 'UCA', 'UCG'], 'Serine'],
  [['UAU', 'UAC'], 'Tyrosine'],
  [['UGU', 'UGC'], 'Cysteine'],
  [['UGG'], 'Tryptophan'],
];

const stop = ['UAA', 'UAG', 'UGA'];

export default class ProteinTranslation {
  static proteins(inputSequence: string): string[] {
    const proteins: string[] = [];

    if (!inputSequence) {
      return proteins;
    }

    const sequenceParts = inputSequence.match(/.{1,3}/g) || [];
    for (const sequencePart of sequenceParts) {
      if (stop.includes(sequencePart)) {
        return proteins;
      }
      if (sequencePart.length !== 3) {
        throw new Error('Invalid codon');
      }
      for (const sequence of sequences) {
        if (sequence[0].includes(sequencePart)) {
          proteins.push(sequence[1]);
        }
      }
    }

    if (!proteins.length) {
      throw new Error('Invalid codon');
    }

    return proteins;
  }
}
