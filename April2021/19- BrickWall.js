/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function (wall) {
  const gaps = {};
  for (let row of wall) {
    if (row.length == 1) {
      gaps[row[0]] = 0;
      continue;
    }
    let sum = row[0];
    for (let i = 1; i < row.length; i++) {
      gaps[sum] ? gaps[sum]++ : (gaps[sum] = 1);
      sum += row[i];
    }
  }
  return wall.length - Math.max(...Object.values(gaps));
};
