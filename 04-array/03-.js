// 输入：nums = [5,7,7,8,8,10], target = 8
// 输出：[3,4]
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/**
 * 情况1 :target 在数组 左侧[-1,1]
 * 情况2 :taget 在数组右侧[-1,1]
 * 情况3 :target 在数组范围中
 * */

var searchRange = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let arr = []
  while (left <= right) {
    let middle = left + Math.floor((right - left) / 2);
    if (nums[middle] < target) {
      left = middle + 1
    } else if (nums[middle] > target) {
      right = right - 1
    }

  }

};
const a = searchRange([5, 7, 7, 8, 8, 10], 8)
console.log(a);