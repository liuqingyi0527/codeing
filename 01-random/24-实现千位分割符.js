
// 思路 转成字符串数组 用.分割
// 反转整数部分
// 每三位在放一个逗号，放入新数组
// 反转数组
// 空格拼接
function numFomat(num) {
  //判断小数点,获取小数部分
  const all = num.toString().split(".");
  const int = all[0].split("").reverse()
  const float = all[1]
  let res = []
  for (let i = 0; i < int.length; i++) {
    if (i % 3 === 0 && i != 0) {
      res.push(',')
    }
    res.push(int[i]);
  }
  res = res.reverse();
  if (float) {
    return res.join("").concat("." + float);
  }
  return res.join('')
}
var a = 1234567894532;
var b = 673439.4542;

console.log(numFomat(b))
console.log(numFomat(a))

// 方法2
var a = 1234567894532;
var b = 673439.4542;

console.log(a.toLocaleString());
console.log(b.toLocaleString());

// 方法3
/**
 * /(\d)(?=(\d{3})+$)/g 表示匹配3个数字前面的数字 $1+","本身加逗号
 * /run(?=[\d+])/g 匹配数组前面的 run 字符串
 */
function numFormat(num) {
  var res = num.toString().replace(/\d+/, function (n) { // 先提取整数部分
    return n.replace(/(\d)(?=(\d{3})+$)/g, function ($1) {
      return $1 + ",";
    });
  })
  return res;
}

var a = 1234567894532;
var b = 673439.4542;
console.log(numFormat(a)); // "1,234,567,894,532"
console.log(numFormat(b)); // "673,439.4542"