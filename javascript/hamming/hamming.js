module.exports = () => {
  return {
    compute (strand1, strand2) {
      if (strand1.length === strand2.length) {
        let diff = 0;
        for (let index = 0; index < strand1.length; index++) {
          if (strand1[index] !== strand2[index]) {
            diff++;
          }
        }
        return diff;
      }
      throw new Error('DNA strands must be of equal length.');
    },
  };
};
