/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
  // 默认里面有一个值
  var nums = [start + 2 * 0];
  let temp = nums[0];
  for (let i = 1; i < n; i++) {
    nums.push(start + 2 * i);
    temp = temp ^ nums[i]
  }

  // for (let j = 0; j < nums.length; j++) {

  // }
  console.log(temp);
};
// xorOperation(5, 0)
xorOperation(4, 3)
