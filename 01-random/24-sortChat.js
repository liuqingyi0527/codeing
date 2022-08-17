const arr = ['a', 'F', 'd', 'b', 'A', 'c', 'D', 'v', 'C', 'z', 'k', 'Z', 'j'];

const alphabetSort = (alphabet) => {
  alphabet.sort(function (s, t) {
    let a = s.toLowerCase();
    let b = t.toLowerCase();
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  })
  return alphabet
}
// 不区分大小写排序直接执行
// console.log("alphabetSort(arr)", alphabetSort(arr));

function sortChat(arr) {
  let capital = [];// 大写
  let lowercase = [];// 小写

  arr.forEach(element => {
    if (/[A-Z]/.test(element)) {
      capital.push(element)
    } else {
      lowercase.push(element)
    }
  });
  const a = alphabetSort(lowercase);
  const b = alphabetSort(capital);
  return [...a, ...b];
}
sortChat(arr)