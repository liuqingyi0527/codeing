// 3.选择排序
/**
 * 1.首先在未排序的序列中找到最小（大）元素，存在到 排序序列 的起始位置
 * 2.在从剩余未排序的元素中寻找最小（大）元素，然后已放在 已排序序列 的末尾
 * 3.重复第二步，直到所有选素均排序完毕
 */

// test:[5, 2, 4, 6, 1, 3]
function selectionSort(arr) {
  var len = arr.length;
  var minIndex, temp;
  for (var i = 0; i < len - 1; i++) {
    minIndex = i
    for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        //寻找最小的数
        minIndex = j //将最小的数的索引保存
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  return arr
}
const arr = [5, 2, 4, 6, 1, 3]
console.log("selectionSort(arr)", selectionSort(arr))

// 快速排序
/**
 * 选择数组中的一个值作为基准
 * 将数组中小于该值的数 置于数组之前，大于该值的数 置于该数之后,接着对该数钱后的两个数组进行重复操作直至排序完成
 */

function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const num = arr[0];
  let left = [], right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < num) left.push(arr[i])
    else right.push(arr[i])
  }

  return quickSort(left).concat([num], quickSort(right))

}

console.log("quickSort(arr)", quickSort(arr))