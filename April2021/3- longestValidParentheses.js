/**
 * @param {string} s
 * @return {number}
 */

var longestValidParentheses = function (parentheses) {
  let stack = [-1],
    ans = 0;
  for (let i = 0; i < parentheses.length; i++)
    if (parentheses[i] === '(') stack.push(i);
    else if (stack.length === 1) stack[0] = i;
    else stack.pop(), (ans = Math.max(ans, i - stack[stack.length - 1]));
  return ans;
};
