/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */

const isSorted = (arr) => {
  let i = 1;
  for (; i < arr.length; i++) if (arr[i] < arr[i - 1]) break;
  return i == arr.length;
};
const isAlienSorted = function (words, order) {
  if (words.length == 1) return true;

  const weight = order.split('').reduce((acc, letter, index) => {
    return { ...acc, [letter]: index + 1 };
  }, {});

  const maxLength = Math.max(...words.map((word) => word.length));

  const wordsWeight = words.map((word) =>
    word.split('').reduce((acc, letter, index) => {
      return acc + 10 ** (maxLength - 1 - index) * weight[letter];
    }, 0)
  );
  return isSorted(wordsWeight);
};
