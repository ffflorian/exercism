export function isArmstrongNumber(candidate: number): boolean {
  const candidateArray = [...candidate.toString()].map(Number);
  const result = candidateArray.reduce((acc, n) => acc + Math.pow(n, candidateArray.length), 0);
  return result === candidate;
}
