/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let result = new Array(matrix.length);
  for (let i = 0; i < matrix.length; i++) {
    for (const arr of matrix) {
      result[i] = result[i] ? [arr[i], ...result[i]] : [arr[i]];
    }
  }
  // matrix = result;
  return result;
};
