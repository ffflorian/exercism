module.exports = (word) => {
  return {
    isIsogram () {
      return !(/([A-zÀ-ÿ]).*\1/i).test(word);
    },
  };
};
