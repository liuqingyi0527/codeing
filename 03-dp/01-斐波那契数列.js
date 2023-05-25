/**
 * F(0) = 0，F(1) = 1
 * F(n) = F(n - 1) + F(n - 2)，其中 n > 1
 * 考察 动态规划
 */


/**
 * 分析
 * F(2)=F(1)+F(0)
 */

//方法1 递归
function fib(n) {
  console.log("n", n)
  if (n == 0 || n == 1) return n
  const fn = fib(n - 1) + fib(n - 2)
  console.log("*****", fn)
  return fn
};

// fib(3)
// console.log("n=3", fib(3))
// console.log("n=4", fib(4))

// 方法2 指针移动方法
const fib1 = function (n) {
  if (n == 0 || n == 1) return n;
  let p = 0, q = 0, r = 1
  for (let i = 2; i <= n; i++) {
    p = q
    q = r
    r = p + q
  }
  console.log("r", r)
  return r
}

console.log("n=3 2", fib1(3))
console.log("n=4 3", fib1(4))

