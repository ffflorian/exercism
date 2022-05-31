export function compute(strand1: string, strand2: string): number {
  if (!strand1 && strand2) {
    throw new Error('left strand must not be empty');
  }

  if (strand1 && !strand2) {
    throw new Error('right strand must not be empty');
  }

  if (strand1.length !== strand2.length) {
    throw new Error('DNA strands must be of equal length.');
  }

  let diff = 0;

  for (let i = 0; i < strand1.length; i++) {
    if (strand1[i] !== strand2[i]) {
      diff++;
    }
  }

  return diff;
}
