/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function (wall) {
  const gaps = { max: 0 };
  for (let row of wall) {
    if (row.length == 1) {
      gaps[row[0]] = 0;
      continue;
    }
    let sum = row[0];
    for (let i = 1; i < row.length; i++) {
      gaps[sum] ? gaps[sum]++ : (gaps[sum] = 1);
      if (gaps.max < gaps[sum]) gaps.max = gaps[sum];
      sum += row[i];
    }
  }
  return wall.length - gaps.max;
};
