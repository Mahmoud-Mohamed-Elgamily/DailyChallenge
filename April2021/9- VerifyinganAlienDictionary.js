/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */

const isSorted = (arr) => {
  let result = true;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      result = false;
      break;
    }
  }
  return result;
};
const isAlienSorted = function (words, order) {
  if (words.length == 1) return true;

  const weight = {};
  order.split('').map((letter, index) => (weight[letter] = index + 1));

  const maxLength = Math.max(...words.map((el) => el.length));

  const wordsWeight = words.map((word) =>
    word.split('').reduce((acc, letter, index) => {
      return acc + 10 ** (maxLength - 1 - index) * weight[letter];
    }, 0)
  );
  console.log(wordsWeight);
  return isSorted(wordsWeight);
};
