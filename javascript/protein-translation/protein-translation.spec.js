import { describe, expect, test } from '@jest/globals';
import { translate } from './protein-translation';

describe('ProteinTranslation', () => {
  test('Empty RNA sequence results in no proteins', () => {
    expect(translate()).toEqual([]);
  });

  describe('Single codons', () => {
    test('Methionine RNA sequence', () => {
      expect(translate('AUG')).toEqual(['Methionine']);
    });

    test('Phenylalanine RNA sequence 1', () => {
      expect(translate('UUU')).toEqual(['Phenylalanine']);
    });
    test('Phenylalanine RNA sequence 2', () => {
      expect(translate('UUC')).toEqual(['Phenylalanine']);
    });

    test('Leucine RNA sequence 1', () => {
      expect(translate('UUA')).toEqual(['Leucine']);
    });
    test('Leucine RNA sequence 2', () => {
      expect(translate('UUG')).toEqual(['Leucine']);
    });

    test('Serine RNA sequence 1', () => {
      expect(translate('UCU')).toEqual(['Serine']);
    });
    test('Serine RNA sequence 2', () => {
      expect(translate('UCC')).toEqual(['Serine']);
    });
    test('Serine RNA sequence 3', () => {
      expect(translate('UCA')).toEqual(['Serine']);
    });
    test('Serine RNA sequence 4', () => {
      expect(translate('UCG')).toEqual(['Serine']);
    });

    test('Tyrosine RNA sequence 1', () => {
      expect(translate('UAU')).toEqual(['Tyrosine']);
    });
    test('Tyrosine RNA sequence 2', () => {
      expect(translate('UAC')).toEqual(['Tyrosine']);
    });

    test('Cysteine RNA sequence 1', () => {
      expect(translate('UGU')).toEqual(['Cysteine']);
    });
    test('Cysteine RNA sequence 2', () => {
      expect(translate('UGC')).toEqual(['Cysteine']);
    });

    test('Tryptophan RNA sequence', () => {
      expect(translate('UGG')).toEqual(['Tryptophan']);
    });

    test('STOP codon RNA sequence 1', () => {
      expect(translate('UAA')).toEqual([]);
    });
    test('STOP codon RNA sequence 2', () => {
      expect(translate('UAG')).toEqual([]);
    });
    test('STOP codon RNA sequence 3', () => {
      expect(translate('UGA')).toEqual([]);
    });
  });

  describe('Multiple codons', () => {
    test('Sequence of two protein codons translates into proteins', () => {
      expect(translate('UUUUUU')).toEqual(['Phenylalanine', 'Phenylalanine']);
    });

    test('Sequence of two different protein codons translates into proteins', () => {
      expect(translate('UUAUUG')).toEqual(['Leucine', 'Leucine']);
    });

    test('Translate RNA strand into correct protein list', () => {
      expect(translate('AUGUUUUGG')).toEqual([
        'Methionine',
        'Phenylalanine',
        'Tryptophan',
      ]);
    });

    test('Translation stops if STOP codon at beginning of sequence', () => {
      expect(translate('UAGUGG')).toEqual([]);
    });

    test('Translation stops if STOP codon at end of three-codon sequence', () => {
      expect(translate('AUGUUUUAA')).toEqual(['Methionine', 'Phenylalanine']);
    });

    test('Translation stops if STOP codon in middle of three-codon sequence', () => {
      expect(translate('UGGUAGUGG')).toEqual(['Tryptophan']);
    });

    test('Translation stops if STOP codon in middle of six-codon sequence', () => {
      expect(translate('UGGUGUUAUUAAUGGUUU')).toEqual([
        'Tryptophan',
        'Cysteine',
        'Tyrosine',
      ]);
    });

    test('Sequence of two non-STOP codons does not translate to a STOP codon', () => {
      expect(translate('AUGAUG')).toEqual(['Methionine', 'Methionine']);
    });
  });

  describe('Unexpected strands', () => {
    test("Unknown amino acids, not part of a codon, can't translate", () => {
      expect(() => translate('XYZ')).toThrow(new Error('Invalid codon'));
    });

    test("Incomplete RNA sequence can't translate", () => {
      expect(() => translate('AUGU')).toThrow(new Error('Invalid codon'));
    });

    test('Incomplete RNA sequence can translate if valid until a STOP codon', () => {
      expect(translate('UUCUUCUAAUGGU')).toEqual([
        'Phenylalanine',
        'Phenylalanine',
      ]);
    });
  });
});
