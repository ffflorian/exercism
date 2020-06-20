/**
 * @param {Date} beginTime
 */
export function gigasecond(beginTime) {
  return new Date(beginTime.getTime() + 1e12);
}
