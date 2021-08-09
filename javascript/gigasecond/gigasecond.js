//@ts-check

/**
 * @param {Date} beginTime
 * @returns {Date}
 */
export function gigasecond(beginTime) {
  return new Date(beginTime.getTime() + 1e12);
}
