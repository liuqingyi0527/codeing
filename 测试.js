
var listall = [
  { name: '1' }, { name: '2' }, { name: '3' }, { name: '4' }, { name: '5' }, { name: '6' }, { name: '7' },
  { name: '8' }, { name: '9' }, { name: '10' }, { name: '11' }, { name: '12' }, { name: '13' }, { name: '14' },
  { name: '15' }, { name: '16' }, { name: '17' }, { name: '18' }, { name: '19' }, { name: '20' }
];

function changelist(list, num) {
  var n = list.length - 1;//获取数组下标的上限
  var length = n / num;//获取分组后单组的长度
  var list1 = list, list2 = [];
  for (var i = 0; i < num; i++) {//根据分组数，确定遍历次数
    var newlist = [];
    for (var j = 0; j < length; j++) {
      var id = Math.ceil(Math.random(0, list1.length - 1) * list1.length - 1);//获取下标范围内的随机数
      newlist.push(list1[id]);//将获取的对象放入定义的变量数组中
      list1.splice(id, 1);//从数组中清除当前项
    }
    list2.push(newlist);//将变量数组放入结果组数中
  }
  return list2;
}
var morelist = changelist(listall, 2);
console.log(morelist);