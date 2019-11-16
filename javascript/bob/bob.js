export function hey(input) {
  if (input.trim().length === 0) {
    return 'Fine. Be that way!';
  }
  if (input === input.toUpperCase() && input.toUpperCase() !== input.toLowerCase()) {
    return 'Whoa, chill out!';
  }
  if (input.slice(-1) === '?') {
    return 'Sure.';
  }
  return 'Whatever.';
}
