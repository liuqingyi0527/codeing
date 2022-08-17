var hammingDistance = function (x, y) {
  x = x.toString(2);
  y = y.toString(2);
  console.log("x", x);
  console.log("y", y);
  let maxLength = Math.max(x.length, y.length);
  // padStart()和padStart()一共接受两个参数，第一个参数用来指定字符串的最小长度，第二个参数是用来补全的字符串。
  x = x.padStart(maxLength, 0);
  y = y.padStart(maxLength, 0);
  let ans = 0;
  for (let i = 0; i < maxLength; i++) {
    if (x[i] !== y[i]) ans++;
  }
  return ans;
}

console.log(hammingDistance(1, 4));