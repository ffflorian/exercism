const sequences = [
  [['AUG'], 'Methionine'],
  [['UUU', 'UUC'], 'Phenylalanine'],
  [['UUA', 'UUG'], 'Leucine'],
  [['UCU', 'UCC', 'UCA', 'UCG'], 'Serine'],
  [['UAU', 'UAC'], 'Tyrosine'],
  [['UGU', 'UGC'], 'Cysteine'],
  [['UGG'], 'Tryptophan'],
];

const stop = ['UAA', 'UAG', 'UGA'];

export const translate = sequence => {
  const proteins = [];

  if (!sequence) {
    return proteins;
  }

  const sequenceParts = sequence.match(/.{1,3}/g);
  for (let sequencePart of sequenceParts) {
    if (stop.includes(sequencePart)) {
      return proteins;
    }
    if (sequencePart.length !== 3) {
      throw new Error('Invalid codon');
    }
    for (let sequence of sequences) {
      if (sequence[0].includes(sequencePart)) {
        proteins.push(sequence[1]);
      }
    }
  }

  if (!proteins.length) {
    throw new Error('Invalid codon');
  }

  return proteins;
};
