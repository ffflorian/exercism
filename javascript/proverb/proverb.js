export const proverb = (...inputs) => {
  const words = inputs.filter(input => typeof input === 'string');
  const qualifier = (inputs.find(input => typeof input === 'object') || {}).qualifier || '';

  let result = '';

  for (let index = 0; index < words.length; index++) {
    const currentWord = words[index];
    const nextWord = words[index + 1];
    result += nextWord
      ? `For want of a ${currentWord} the ${nextWord} was lost.\n`
      : `And all for the want of a ${qualifier ? `${qualifier} ` : ''}${words[0]}.`;
  }

  return result;
};
