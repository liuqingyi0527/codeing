// 一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。
// 在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。

// 输入: [0,1,3]
// 输出: 2

// 输入: [0,1,2,3,4,5,6,7,9]
// 输出: 8
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const n = nums.length + 1
  const orgin = Array.from({ length: n }, (v, k) => k)
  for (let i = 0; i < orgin.length; i++) {
    if (nums.indexOf(orgin[i]) == -1) {
      return orgin[i]
    }
  }
};
const nums = [0, 1, 3]
console.log(missingNumber(nums))


var missingNumber = function (nums) {
  const set = new Set();
  const n = nums.length + 1;
  for (let i = 0; i < n - 1; i++) {
    set.add(nums[i]);
  }
  let missing = -1;
  for (let i = 0; i <= n - 1; i++) {
    if (!set.has(i)) {
      missing = i;
      break;
    }
  }
  return missing;
};
