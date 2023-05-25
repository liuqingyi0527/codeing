// 实现一个函数，[2,1,2,4,3,5,6,6,7],2 => [6,2]
// function getK(arrs, k) { return [] }
// 找到这个数第几大，并找出出现的次数

function getK(arrs, k) {
  const hash = {};
  const count = 0
  const newArrs = arrs.sort(function (a, b) {
    return a - b;
  });
  const noReapt = Array.from(new Set(newArrs));
  const maxNum = noReapt && noReapt.findIndex((index) => { return index == k }) + 1;

  for (let i = 0; i < newArrs.length; i++) {
    // if (hash[newArrs[i]]) {
    //   hash[newArrs[i]]++
    // } else {
    //   hash[newArrs[i]] = 1
    // }
    if (newArrs[i] == k && hash[newArrs[i]]) {
      hash[newArrs[i]]++
    } else {
      hash[newArrs[i]] = 1
    }
  }
  console.log(hash)

  return [maxNum, hash[k]]
}

const arrs = [2, 1, 2, 4, 3, 5, 6, 6, 7]
const k = 2
console.log(getK(arrs, 7))