/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const combinationSum4 = function (nums, target) {
  let dp = new Uint32Array(target + 1);
  dp[0] = 1;
  for (let i = 1; i <= target; i++)
    for (let num of nums) if (num <= i) dp[i] += dp[i - num];
  return dp[target];
};
