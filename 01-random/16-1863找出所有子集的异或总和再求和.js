/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
  // 求所有子集
  let numsArr = [[]]
  for (let i = 0; i < nums.length; i++) {
    const t = []
    for (let j = 0; j < numsArr.length; j++) {
      t.push([...numsArr[j], nums[i]])
    }
    numsArr.push(...t)
  }

  let sumsArr = [0];
  let sumTotal
  for (let i = 0; i < numsArr.length; i++) {
    let sums = 0
    const tempArr = numsArr[i];
    for (let j = 0; j < tempArr.length; j++) {
      sums = sums ^ tempArr[j];
    }
    sumsArr.push(sums)
    sumTotal = sumsArr.reduce((p, c) => {
      return p + c
    })
  }
  return sumTotal
};
const nums = [5, 1, 6];
// const nums = [1, 3]
console.log(subsetXORSum(nums));