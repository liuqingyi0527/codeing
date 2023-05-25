
/**
 * 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target 
 * 写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。

 */
// 输入: nums = [-1, 0, 3, 5, 9, 12], target = 9
// 输出: 4
// 解释: 9 出现在 nums 中并且下标为 4
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//  while (left <= right) 要使用 <= ，因为left == right是有意义的，所以使用 <=
//  if (nums[middle] > target) right 要赋值为 middle - 1，因为当前这个nums[middle]一定不是target，那么接下来要查找的左区间结束下标位置就是 middle - 1

var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let middle = Math.floor(left + (right - left) / 2)
    if (nums[middle] > target) {
      right = middle - 1
    } else if (nums[middle] < target) {
      left = middle + 1
    } else {
      return middle
    }

  }
  return -1
};

const result = search([-1, 0, 3, 5, 9, 12], 9);
console.log("result", result)
// search([-1, 0, 3, 5, 9, 12], 9)