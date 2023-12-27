export function clean(input: string): string | undefined {
  const cleanInput = input.replace(/[.-]/g, '').replace(/ /g, '').replace(/^\+/, '');

  if (/[A-z]/.test(cleanInput.replace(/[()]/g, ''))) {
    throw new Error('Letters not permitted');
  }

  if (/\D/.test(cleanInput.replace(/[()]/g, ''))) {
    throw new Error('Punctuations not permitted');
  }

  const {
    prefix = '',
    areaCode = '',
    exchangeCode = '',
  } = /((?<prefix>\+?\d+)?\((?<areaCode>\d+)\)?)?(?<exchangeCode>\d+)/.exec(cleanInput)?.groups || {};

  const cleanNumber = `${areaCode}${exchangeCode}`;

  if (!prefix && cleanNumber.length < 10) {
    throw new Error('Incorrect number of digits');
  }

  if (cleanNumber.length > 11) {
    throw new Error('More than 11 digits');
  }

  if (cleanNumber.length === 11 && !cleanNumber.startsWith('1')) {
    throw new Error('11 digits must start with 1');
  }

  if (/^(0|1)/.test(areaCode)) {
    throw new Error(`Area code cannot start with ${areaCode[0] === '0' ? 'zero' : 'one'}`);
  }

  if (areaCode.startsWith('1')) {
    throw new Error('Area code cannot start with one');
  }

  if (cleanNumber.length < 11 && /^(0|1)/.test(exchangeCode)) {
    throw new Error(`Exchange code cannot start with ${exchangeCode[0] === '0' ? 'zero' : 'one'}`);
  }

  if (cleanNumber.length === 11) {
    return cleanNumber.slice(1);
  }

  return cleanNumber;
}
