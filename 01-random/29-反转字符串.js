// 输入：s = ["h","e","l","l","o"]
// 输出：["o","l","l","e","h"]
// 思路 双指针，一个在前一个在后，每次交换
function swap(arr, l, r) {
  let temp = arr[l];
  arr[l] = arr[r]
  arr[r] = temp
  return arr
}
var reverSeString = function (s) {
  let slow = 0;
  let arr = []
  for (let fast = s.length - 1, slow = 0; fast >= slow; fast--) {
    arr = swap(s, slow++, fast);
  }
  return arr
}
console.log(reverSeString(["h", "e", "l", "l", "o"]))