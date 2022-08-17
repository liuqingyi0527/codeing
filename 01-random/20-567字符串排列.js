/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
//  第一个字符串的排列之一是第二个字符串的 子串 。
// 输入: s1 = "ab" s2 = "eidbaooo"
// 输出: True
// 解释: s2 包含 s1 的排列之一 ("ba").
// var a = "ab"; var b = "eidbaooo"
var a = "ab"
var b = "eidboaoo"
var permutation = function (str) {
  if (str.length == 1) {
    return [str]
  }
  let res = [];
  for (let i = 0; i < str.length; i++) {
    let resStr = str.slice(0, i) + str.slice(i + 1);
    let resArr = permutation(resStr)
    resArr = resArr.map(x => str[i] + x);
    res = res.concat(resArr);
  }
  return Array.from(new Set(res))
};

function checkInclusion(s1, s2) {
  const nums = permutation(s2)
  let flag = false
  for (let i = 0; i < nums.length; i++) {
    if (nums[i].indexOf(s1) != -1) {
      console.log(nums[i]);
      flag = true
    }
  }
  return flag
}
console.log(checkInclusion(a, b));