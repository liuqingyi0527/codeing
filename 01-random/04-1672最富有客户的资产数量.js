/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  var total = []
  for (var i = 0; i < accounts.length; i++) {
    let temp = accounts[i];
    let tempAdd = 0;
    for (var j = 0; j < temp.length; j++) {
      tempAdd += temp[j]
    }
    total.push(tempAdd);
  }
  console.log("total", total);
  return Math.max(...total)

};
// var acc = [[1, 2, 3], [3, 2, 1]];
// var acc = [[1, 5], [7, 3], [3, 5]];
var acc = [[2, 8, 7], [7, 1, 3], [1, 9, 5]]
console.log(maximumWealth(acc));