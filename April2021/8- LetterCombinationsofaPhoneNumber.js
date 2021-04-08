/**
 * @param {string} digits
 * @return {string[]}
 */

const numberToLetters = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
};

const letterCombinations = function (digits) {
  const result = [];
  if (digits.length == 0) return [];
  const dfs = (pos, str) => {
    if (pos === digits.length) result.push(str);
    else {
      let letters = numberToLetters[digits[pos]];
      for (let i = 0; i < letters.length; i++) dfs(pos + 1, str + letters[i]);
    }
  };
  dfs(0, '');
  return result;
};
