/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const res = [[]];
  for (let i = 0; i < nums.length; i++) {
    const t = [];
    for (let j = 0; j < res.length; j++) {
      t.push([...res[j], nums[i]]);
    }
    res.push(...t);
  }
  return res;
};
console.log(subsets([1, 2, 3]));