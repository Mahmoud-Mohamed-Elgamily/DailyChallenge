/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function (heights, bricks, ladders) {
  let queue = [];
  queue.add = (diff) => {
    for (let i = 0; i < queue.length; i++) {
      if (queue[i] > diff) {
        queue = [...queue.slice(0, i), diff, ...queue.slice(i)];
        break;
      }
    }
  };
  for (let i = 0; i < heights.length; i++) {
    let diff = heights[i + 1] - heights[i];
    if (diff > 0) {
      if (diff > 0 && ladders) {
        queue.add(diff);
        ladders--;
      } else if (!ladders && (bricks - queue[0] >= 0 || bricks > diff)) {
        if (diff > queue[0]) {
          bricks -= queue[0];
          queue.shift();
          ladders++;
        } else {
          bricks -= diff;
        }
      } else return i;
    }
  }
  return heights.length - 1;
};
