// 剑指Offer第5题
// 输入：s = "We are happy."
// 输出："We%20are%20happy."
var replaceSpace = function (s) {
  s = s.split("");// 变成数组
  for (let fast = 0; fast < s.length; fast++) {
    if (s[fast] === ' ') {
      s[fast] = '%20'
    }
  }
  return s.join('')
}