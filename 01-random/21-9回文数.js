// 输入：x = 121
// 输出：true

// 输入：x = -121
// 输出：false
// 解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let str = String(x);
  if (str[0] == '-') {
    return false
  }
  const reverseStr = str.split("").reverse().join("");
  return reverseStr == str
};


//方法二 双指针
function isPalindrome1(x) {
  let i = 0; j = x.length - 1;
  while (i < j) {
    if (x[i] !== x[j]) {
      return false
    } else {
      i++
      j--
    }
  }
  return true
}