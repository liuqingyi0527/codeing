
// 给你一个整数数组 cost ，其中 cost[i] 是从楼梯第 i 个台阶向上爬需要支付的费用。一旦你支付此费用，即可选择向上爬一个或者两个台阶。
// 动态规划
const minCostClimbingStairs = function (cost) {
  const n = cost.length;
  const dp = new Array(n + 1);
  dp[0] = dp[1] = 0 //下标为0 作为初始台阶，站在上面不花钱
  for (let i = 2; i <= n; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }
  return dp[n]
}
const cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
// const cost = [10, 15, 20]
console.log(minCostClimbingStairs(cost))

