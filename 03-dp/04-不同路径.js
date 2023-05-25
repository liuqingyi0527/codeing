/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  //创建 用0填充长度是m的数组 [ 0, 0, 0 ]
  //遍历 [ 0, 0, 0 ] 返回每一项为
  const f = new Array(m).fill(0).map(() => new Array(n).fill(0))

  for (let i = 0; i < m; i++) {
    f[i][0] = 1;
  }
  for (let j = 0; j < n; j++) {
    f[0][j] = 1;
  }
  console.log("f****", f)
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      /**
       * f[1][1]=f[0][1]+f[1][0]
       * 2=1+1
       */
      f[i][j] = f[i - 1][j] + f[i][j - 1]
    }

  }
  console.log("f", f, f[m - 1][n - 1])
  return f[m - 1][n - 1]

};

// console.log(uniquePaths(3, 2))
console.log(uniquePaths(3, 3))