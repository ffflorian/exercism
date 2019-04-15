module.exports = (beginTime) => {
  return {
    date () {
      return new Date(beginTime.getTime() + 1e12);
    },
  };
};
