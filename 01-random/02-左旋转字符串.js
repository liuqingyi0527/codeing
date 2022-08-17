/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
  // 库思想
  // var newA = s.substr(0, n);
  // var newB = s.slice(n);
  // return newB + newA
  // 分治思想
  let l = r = ""
  for (let c of s) {
    n-- > 0 ? (r += c) : (l += c)
  }
  return l + r
};
// var result = reverseLeftWords("abcdefg", 2);
var result = reverseLeftWords("lrloseumgh", 6);
console.log(result);