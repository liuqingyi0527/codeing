// var permutation = function (s) {
//   const res = new Set()
//   const visit = {}
//   function dfs(path) {
//     console.log('--', path);
//     if (path.length === s.length) return res.add(path)
//     for (let i = 0; i < s.length; i++) {
//       if (visit[i]) continue
//       visit[i] = true
//       dfs(path + s[i])
//       visit[i] = false;
//       console.log(visit);
//     }
//   }
//   dfs('')
//   return [...res]
// };
// 方法2
// var permutation = function (str) {
//   if (str.length == 1) {
//     return [str];
//   }
//   let res = [];
//   console.log(str);
//   for (let i = 0; i < str.length; i++) {
//     let restStr = str.slice(0, i) + str.slice(i + 1);
//     let restArr = permutation(restStr);
//     restArr = restArr.map(x => str[i] + x);
//     res = res.concat(restArr);
//   }
//   // return Array.from(new Set(res))
//   return res

// };

// var s = "abc"
// console.log(permutation(s));

// 12345  倒序输出 54321
let str = ''
function sortFun(s) {
  str += (s % 10)
  if (s > 10) {
    sortFun(parseInt(s / 10));
  }
  return str
}
var s = 12345
console.log(sortFun(s));