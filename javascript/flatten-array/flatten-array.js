export const flatten = array => {
  const result = [];
  _flatten(array, result);
  return result.filter(Boolean);
};

function _flatten(array, result) {
  for (let i = 0; i < array.length; i++) {
    const value = array[i];

    if (Array.isArray(value)) {
      _flatten(value, result);
    } else {
      result.push(value);
    }
  }
}
