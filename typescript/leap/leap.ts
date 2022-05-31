export const isLeap = (year: number): boolean => year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
