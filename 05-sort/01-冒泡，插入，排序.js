//1. 冒泡排序
// 思想：两层循环，第一层是比较趟数，第二层是次数
// 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数。
function sort(arr) {
  if (arr == null || arr.length <= 0) {
    return [];
  }
  var len = arr.length - 1;
  //外层循环控制趟数
  for (let i = 0; i < len; i++) {
    // 内层循环，控制比较次数
    for (let j = 0; j < len - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp
      }
    }
  }
  return arr
}
// const arr = [13, 10, 34, 20, 45, 8, 4]
// console.log(sort(arr))

// 2.插入排序
// 思想：每一步将一个待排序的数据插入到 前面已经排好序的有序（所以是j--） 序列中，直到插完所有元素为止。

function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    // 当前要处理的数
    let temp = arr[i];
    let j = i - 1;
    // 当前数小
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j]
      j--
    }

    // 当前位置不动
    arr[j + 1] = temp
  }
  return arr
}
console.log(insertSort([5, 2, 4, 6, 1, 3]))