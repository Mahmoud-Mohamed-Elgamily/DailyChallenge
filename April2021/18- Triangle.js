/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  let result = 0;
  let index = 0;
  triangle.forEach((el) => {
    if (el[index] > el[index + 1]) {
      result += el[index + 1];
      index = el.indexOf(el[index + 1]);
    } else {
      result += el[index];
    }
  });

  return result;
};
