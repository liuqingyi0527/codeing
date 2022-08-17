// var runningSum = function (nums) {
//   var newArr = [nums[0]]
//   var temp = nums[0]
//   for (let i = 1; i < nums.length; i++) {
//     temp = temp + nums[i]
//     newArr.push(temp)
//   }
//   return newArr
// };

// var runningSum = function (nums) {
//   let num = null;
//   let result = nums.map((item) => (num += item));
//   return result;
// };

var runningSum = function (nums) {
  let arr = []
  nums.reduce((pre, cur) => {
    console.log("pre", pre);
    console.log("cur", cur);
    arr.push(pre + cur)
    return pre + cur
  }, 0)
  return arr
};

var nums = [1, 1, 1, 1, 1]
// console.log(runningSum([1, 2, 3, 4]));
console.log(runningSum(nums));