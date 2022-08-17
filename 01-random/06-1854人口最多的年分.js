/**
 * @param {number[][]} logs
 * @return {number}
 */
// var maximumPopulation = function (logs) {
//   var count = 0 //当前存活
//   var max = [0, 0] //[最高存活，最高年份]
//   logs = logs.sort((a, b) => a[0] - b[0]) //按出生排序小到大

//   var waitForDead = [] //等死列表
//   for (let it of logs) {
//     const birth = it[0]
//     count += 1
//     const originDead = waitForDead.length
//     waitForDead = waitForDead.filter(it => it > birth)
//     count -= originDead - waitForDead.length
//     if (count > max[0]) max = [count, birth]
//     waitForDead.push(it[1])
//   }
//   return max[1]
// };

// var maximumPopulation = function (logs) {
//   let logmap = new Map();
//   for (let i = 0; i < logs.length; i++) {
//     for (let j = logs[i][0]; j < logs[i][1]; j++) {
//       let count = logmap.get(j) || 0;
//       count++;
//       logmap.set(j, count);
//     }
//   }
//   let max = [0, 0];
//   logmap.forEach((value, key) => {
//     if (value > max[1] || value === max[1] && key < max[0]) {
//       max = [key, value]
//     }
//   })
//   return max[0];
// };
// var maximumPopulation = function (logs) {
//   let m = {}
//   for (let i = 0; i < logs.length; i++) {
//     for (let j = logs[i][0]; j < logs[i][1]; j++) {
//       m[j] = m[j] || 0;
//       m[j] += 1;
//     }
//   }
//   let max = 0, year = 0;
//   for (let i in m) {
//     if (m[i] > max) {
//       max = m[i];
//       year = i;
//     }
//   }
//   return year
// };

var maximumPopulation = (logs) => {
  let m = {}
  for (let i = 0; i < logs.length; i++) {
    for (let j = logs[i][0]; j < logs[i][1]; j++) {
      m[j] = m[j] || 0;
      m[j] += 1;
    }
  }
  let max = 0, year = 0;
  for (let i in m) {
    if (m[i] > max) {
      max = m[i]
      year = i
    }
  }
  return year
}
var logs = [[1950, 1961], [1960, 1971], [1970, 1981]]
// maximumPopulation(logs);
console.log(maximumPopulation(logs));