// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。

// 输入：s = "cbbd"
// 输出："bb"

/**
 * @param {string} s
 * @return {string}
 * 思路从内向外找
 */
var longestPalindrome = function (s) {
  let max = ''

  for (let i = 0; i < s.length; i++) {
    // 分奇偶， 一次遍历，每个字符位置都可能存在奇数或偶数回文
    helper(i, i)
    helper(i, i + 1)
  }

  function helper(l, r) {
    // 定义左右双指针
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--
      r++
    }
    // 拿到回文字符， 注意 上面while满足条件后多执行了一次，所以需要l+1, r+1-1
    const maxStr = s.slice(l + 1, r + 1 - 1);
    console.log("maxStr", maxStr)
    // 取最大长度的回文字符
    if (maxStr.length > max.length) max = maxStr

  }
  return max
};

var s = "babad";
console.log(longestPalindrome(s))