module.exports = (sentence) => {
  sentence = sentence.trim().toLowerCase();

  return {
    isPangram () {
      return 'abcdefghijklmnopqrstuvwxyz'.split('').filter((char) =>
        sentence.indexOf(char) === -1
      ).length < 1;
    },
  };
};
