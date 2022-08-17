let list = [
  { name: '7' }, { name: '8' }, { name: '9' }, { name: '10' }, { name: '11' }, { name: '13' }, { name: '14' }, { name: "15" }
];
let mangerList = [
  { name: '1' }, { name: '2' }, { name: '3' }, { name: '4' }, { name: '5' }, { name: '6' }
];

function changelist(mangerList, list) {
  var n = mangerList.length;// 组长数组长度
  var m = list.length; // 组员数组长度
  var list2 = [];// 保存 组长随机进的组
  // 第一步随机放组长
  for (let i = 0; i < n; i++) {
    var newList = [];
    var id = Math.round(Math.random(0, (n - 1 - i)) * (n - 1 - i));//随机数 下标;
    newList.push(mangerList[id]);
    mangerList.splice(id, 1);
    list2.push(newList)
  }
  // 第二次随机放组员
  for (let j = 0; j < m; j++) {
    var id = Math.round(Math.random(0, (m - 1 - j)) * (m - 1 - j));//随机数 下标;
    var mid = Math.round(Math.random(0, (list2.length - 1)) * (list2.length - 1));
    while (list2[mid].length == 3) {
      mid = Math.round(Math.random(0, (list2.length - 1)) * (list2.length - 1));
    }
    list2[mid].push(list[id]);
    list.splice(id, 1)
  }
  return list2
}
console.log(changelist(mangerList, list));