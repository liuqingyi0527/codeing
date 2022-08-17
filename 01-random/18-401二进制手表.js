var readBinaryWatch = function (turnedOn) {
  const ans = [];
  for (let h = 0; h < 12; ++h) {
    for (let m = 0; m < 60; ++m) {
      // console.log('h', h, h.toString(2).split('0').join('').length);
      // console.log('m', m.toString(2).split('0').join('').length);
      if (h.toString(2).split('0').join('').length + m.toString(2).split('0').join('').length === turnedOn) {
        console.log(h, m);
        ans.push(h + ":" + (m < 10 ? "0" : "") + m);
      }
    }
  }
  return ans;
};
console.log(readBinaryWatch(9));
// console.log((3).toString(2).split('0').join(''));
