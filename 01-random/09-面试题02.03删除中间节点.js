var deleteNode = function (node) {
  while (node.next) {
    node.val = node.next.val
    if (node.next.next) {
      node = node.next
    } else {
      node.next = null
    }
  }
};
console.log(deleteNode());