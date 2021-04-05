/**
 * @param {number[]} A
 * @return {boolean}
 */
var isIdealPermutation = function (A) {
  let [global, local] = [0, 0];

  for (let i = 0; i < A.length; i++) {
    if (A[i] > A[i + 1]) local++;
    for (let j = i + 1; j < A.length; j++) {
      if (A[i] > A[j]) global++;
    }
  }
  return global == local;
};
