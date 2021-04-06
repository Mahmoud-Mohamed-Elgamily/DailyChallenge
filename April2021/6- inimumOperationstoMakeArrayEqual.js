/**
 * @param {number} n
 * @return {number}
 */

/**
 *  arr.length = n
    arr[i] = (2 * i) + 1
    x,y where 0 <= x, y < n
      arr[x] -1 && arr[y] +1
    
 */
var minOperations = function (n) {
  const arr = [];
  arr.length = n;
  for (let i = 0; i < n / 2; i++) {
    arr[i] = 2 * i + 1;
  }
  const mean = arr.reduce((a, b) => a + b, 0) / arr.length;
  return arr.filter((x) => x > mean).reduce((a, b) => a + b - mean, 0);
};

console.log(minOperations(3)); // 2
