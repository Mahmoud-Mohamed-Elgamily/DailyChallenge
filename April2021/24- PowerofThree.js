/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n == 1 || n == 3) return true;
  else
    while (n > 3) {
      n = n / 3;
      if (n == 3) return true;
    }
  return false;
};
