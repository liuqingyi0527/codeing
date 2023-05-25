/**
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 我们用f(x)表示爬到第X级台阶的方案数
 * 考虑到最后一步可能是一级台阶或者二级台阶
 所以列出如下式子
 f(x)=f(x-1)+f(x-2)

 它意味着爬到第X级台阶的方案数是爬到第 x-1 级台阶的方案数和爬到第 x-2 级台阶 的方案数之和

 因为每次只能爬 1 级或者 2 级，所以f(X)只能从f(x-1) 和f(x-2) 转移过来
 把第x-2 的每个方法，走2步到x 级 所以仍然共有f(x-2)种
 把第x-1 的每个方法，走1步到x 级 所以仍然f(x-1)种
*/

/**
 * @param {number} n
 * @return {number}
 */

// 超出时间，不可取
var climbStairs = function (n) {
  if (n == 1 || n == 2) return n
  return climbStairs(n - 1) + climbStairs(n - 2)
};
// console.log(climbStairs(2))
// console.log(climbStairs(3))
// console.log(climbStairs(4))

var climbStairs1 = function (n) {
  if (n == 1 || n == 2) return n
  let p = 1; q = 1, r = 2;
  //i 表示索引
  for (let i = 3; i <= n; i++) {
    p = q
    q = r
    r = p + q
  }
  return r
}
console.log(climbStairs1(3))
