/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  // var newArr = jewels.split('');
  // var str = stones.split('')
  var count = 0
  // for (let i = 0; i < newArr.length; i++) {
  //   for (let j = 0; j < str.length; j++) {
  //     if (str[j] == newArr[i]) {
  //       count++
  //     }
  //   }
  // }
  // 解法一
  // const hash = Object.create(null)
  // for (const j of J) hash[j] = true
  // for (const s of S) hash[s] && count++

  // 解法二
  const hash = new Set(J)
  console.log(hash);
  for (const s of S) hash.has(s) && count++

  // // 解法三
  // const hash = new Array(64).fill(0)
  // for (const j of J) hash[j.charCodeAt() - 65]++
  // for (const s of S) hash[s.charCodeAt() - 65] && count++

  return count
};
var J = "aA"
var S = "aAAbbbb"
// var J = "z", S = "ZZ"
console.log(numJewelsInStones(J, S));