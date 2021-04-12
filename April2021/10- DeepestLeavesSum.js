/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function (root) {
  let level = [root];
  while (level.some((root) => root?.left || root?.right)) {
    level = level.flatMap((root) =>
      [root?.right, root?.left].filter((leaf) => leaf?.val)
    );
  }
  return level.reduce((acc, leaf) => acc + leaf?.val, 0);
};
