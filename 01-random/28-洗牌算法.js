function shuffle(arr) {
  let m = arr.length;

  while (m) {
    // 随机0 到len 的数
    let random = (Math.random() * m--) | 0;
    [arr[random], arr[m]] = [arr[m], arr[random]];
  }
  return arr;
}
console.log(shuffle([1, 5, 6, 7, 6]));
