/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const mp = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (mp.has(target - nums[i])) {
      return [mp.get(target - nums[i]), i];
    }
    mp.set(nums[i], i);
    console.log("mp****", mp)
  }

};

let nums = [2, 7, 11, 15], target = 9
console.log(twoSum(nums, target))