/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const n1 = l1.join("");
  console.log("n1", n1)
  const n2 = l2.join("");
  const n3 = Number(n1) + Number(n2);
  const arrR = String(n3).split("");
  console.log(arrR)
  return arrR
};
let l1 = [2, 4, 3], l2 = [5, 6, 4]
addTwoNumbers(l1, l2)