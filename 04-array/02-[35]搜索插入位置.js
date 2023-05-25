// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
/**
 * 示例 1:

输入: [1,3,5,6], 5
输出: 2
示例 2:

输入: [1,3,5,6], 2
输出: 1
 */

/**
 * 四种情况
 * 目标值在数组所有元素之前
 *目标值等于数组中某一个元素
 *目标值插入数组中的位置
 *目标值在数组所有元素之后
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 暴力循环
// var searchInsert = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     // 一旦发现大于或者等于target的num[i]，那么i就是我们要的结果 (前三种情况)
//     if (nums[i] >= target) {
//       return i
//     }
//   }
//   return nums.length
// };



// 二分法
var searchInsert = function (nums, target) {
  var left = 0;
  var right = nums.length - 1
  while (left <= right) {
    let middle = left + Math.floor((right - left) / 2);

    if (nums[middle] > target) {
      right = middle - 1
    } else if (nums[middle] < target) {
      left = middle + 1
    } else {
      return middle
    }
  }
  return right + 1
};


const a = searchInsert([1, 3, 5, 6], 7)
console.log("索引", a)