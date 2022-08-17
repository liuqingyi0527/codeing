/**
 * @param {number[]} candiesCount
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var canEat = function (candiesCount, queries) {
  let arr = new Array(queries.length);
  var sum = [candiesCount[0]]
  for (let i = 1; i < candiesCount.length; i++) {
    sum[i] = sum[i - 1] + candiesCount[i]
  }
  console.log(sum);
  for (let i = 0; i < queries.length; i++) {
    // 最喜欢的糖果类型，最喜欢的日期，吃糖果的上限
    let [f, d, c] = queries[i];
    let total = sum[f];// 最喜欢的糖果数目
    let p = f > 0 ? sum[f - 1] : 0;
    let min = d + 1;// 最少
    let max = (d + 1) * c;//最多
    arr[i] = !(min > total || max <= p)
  }
  return arr
};

var candiesCount = [7, 4, 5, 3, 8], queries = [[0, 2, 2], [4, 2, 4], [2, 13, 1000000000]]
console.log(canEat(candiesCount, queries));
