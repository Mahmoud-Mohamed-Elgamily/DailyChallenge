/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
const dfs = (root, result) => {
  if (root) result.push(root.val);
  else return;

  if (!root.children) return;
  else {
    for (ele of root.children) dfs(ele, result);
  }
};
var preorder = function (root) {
  let result = [];
  dfs(root, result);
  return result;
};
