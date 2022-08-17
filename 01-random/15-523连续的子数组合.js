// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {boolean}
//  */
// var checkSubarraySum = function (nums, k) {
//   for (let i = 0; i < nums.length; i++) {
//     let sum = nums[i]
//     for (let j = i + 1; j < nums.length; j++) {
//       sum += nums[j]
//       console.log("sum", sum);
//       if (sum % k === 0) {
//         return true
//       }
//     }
//   }
//   return false
// };
// var nums = [23, 2, 4, 6, 7], k = 6
// // var nums = [23, 2, 6, 4, 7], k = 13
// console.log(checkSubarraySum(nums, k));

// var checkSubarraySum = function (nums, k) {
//   const n = nums.length;
//   const sum = new Array(n + 1).fill(0);
//   for (let i = 1; i <= n; i++) {
//     sum[i] = sum[i - 1] + nums[i - 1];
//   }
//   console.log("sum", sum);
//   for (let i = 0; i < n - 1; i++) {
//     for (let j = i + 1; j < n; j++) {
//       const val = sum[j + 1] - sum[i];
//       console.log(val);
//       if (val % k == 0) {
//         return true;
//       }
//     }
//   }
//   return false;
// };
// var nums = [23, 2, 6, 4, 7], k = 13
// console.log(checkSubarraySum(nums, k));

var checkSubarraySum = function (nums, k) {
  const map = new Map();
  let sum = 0;
  // 即map.set(0, -1)，若出现余数为0，则[0, i]区间数组满足，i = 1也符合长度>=2
  map.set(sum % k, -1);
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    // console.log("sum", sum);
    const rem = sum % k;
    console.log("余数", rem, "第几次:", i);
    if (map.has(rem)) {
      console.log("索引出现", map.get(rem), i - map.get(rem));
      if (i - map.get(rem) >= 2) {
        return true;
      }
    } else {
      map.set(rem, i);
    }
    console.log("数组", map);
  }
  return false;
};
// var nums = [23, 2, 6, 4, 7], k = 13;
var nums = [23, 2, 6, 4, 7], k = 6
console.log(checkSubarraySum(nums, k));