export function rotate(input: string, shift: number): string {
  return input.replace(/[A-z]/g, letter => {
    const charCode = letter.charCodeAt(0);
    const startIndex = charCode > 90 ? 97 : 65;
    return String.fromCharCode(startIndex + ((letter.charCodeAt(0) - startIndex + shift) % 26));
  });
}
