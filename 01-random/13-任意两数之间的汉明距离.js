// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var hammingDistance = function (arr) {
//   console.log(arr);
//   let x = arr[0];
//   let y = arr[1];
//   x = x.toString(2);
//   y = y.toString(2);
//   let maxLen = Math.max(x.length, y.length);
//   x = x.padStart(maxLen, 0);
//   y = y.padStart(maxLen, 0);
//   let count = 0;
//   for (let i = 0; i < maxLen; i++) {
//     if (x[i] != y[i]) {
//       count++
//     }
//   }
//   return count
// }
// var totalHammingDistance = function (nums) {
//   var newnums = [];
//   var numbers = []
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       newnums.push([nums[i], nums[j]])
//     }
//   }
//   for (let n = 0; n < newnums.length; n++) {
//     numbers.push(hammingDistance(newnums[n]))
//   }
//   console.log("numbers", numbers);
//   // const sum = numbers && numbers.reduce((p, c) => {
//   //   return (p + c)
//   // })
//   let sum = 0
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i]
//   }

//   return sum
// };
// console.log(totalHammingDistance([1337]));

var totalHammingDistance = function (nums) {
  // 根据题目要求，不超过10^9，所以30位就可以了
  const res = new Array(30).fill(0);
  for (let num of nums) {
    let bit = 0;
    let mask = 0x01;
    while (bit < 30) {
      if (num & mask) {
        ++res[bit];
      }
      ++bit;
      mask = mask << 1;
    }
  }

  const length = nums.length;
  return res.reduce((pre, cur) => pre + cur * (length - cur), 0);
};