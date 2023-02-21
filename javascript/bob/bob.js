export function hey(input) {
  input = input.trim();

  if (input.length === 0) {
    return 'Fine. Be that way!';
  }

  if (input === input.toUpperCase() && input.toUpperCase() !== input.toLowerCase()) {
    if (input.endsWith('?')) {
      return "Calm down, I know what I'm doing!";
    }
    return 'Whoa, chill out!';
  }

  if (input.slice(-1) === '?') {
    return 'Sure.';
  }

  return 'Whatever.';
}
