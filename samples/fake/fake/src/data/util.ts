export const makeArray = (length: number) => new Array(length).fill(null);
export const range = (min: number, max: number): number[] =>
  makeArray(max - min).map((notUsed, index) => index + min); // [5, 6, 7, 8, 9, 10]
export const random = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min)) + min;
