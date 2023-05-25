// 例1: 输入 'abccdtc'
// 输出: 'c'
// 例2: 输入 'abbbbccdtc'
// 输出: 'b'
function maxCount(str) {
  let hash = {}
  let maxCount = 0;
  let maxElement = ''
  for (let i = 0; i < str.length; i++) {
    let cur = str[i];
    if (hash[cur]) {
      hash[cur]++
    } else {
      hash[cur] = 1
    }
    if (maxCount < hash[cur]) {
      maxElement = cur;
      maxCount = hash[cur]
    }
  }
  return maxElement
}