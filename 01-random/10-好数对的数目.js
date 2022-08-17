/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  let count = 0;
  let newArr = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] == nums[j] && i < j) {
        count++;
        newArr.push({ i, j })
      }
    }
  }
  return newArr
};
var nums = [1, 1, 1, 1]
// console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
console.log(numIdenticalPairs(nums));