export function keep(arr, fn) {
  return arr.filter(val => fn(val));
}

export function discard(arr, fn) {
  return arr.filter(val => !fn(val));
}
