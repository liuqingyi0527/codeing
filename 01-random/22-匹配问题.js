// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。

// 输入：s = "{[()]}" 栈思想
const s = "{[()]}"
const isValid = (s) => {
  // 空字符串符合条件
  if (!s) {
    return true
  }

  const leftToRight = {
    '(': ')',
    '[': ']',
    '{': '}'
  }
  const stack = []

  for (let i = 0, len = s.length; i < len; i++) {
    const ch = s[i]
    // 左括号
    if (leftToRight[ch]) {
      stack.push(ch);
    } else {
      // 右括号开始匹配
      // 1. 如果栈内没有左括号，直接false
      // 2. 有数据但是栈顶元素不是当前的右括号
      // pop 删除并返回最后一个元素
      if (!stack.length || leftToRight[stack.pop()] !== ch) {
        return false
      }
    }
  }

  // 最后检查栈内还有没有元素，有说明还有未匹配则不符合
  return !stack.length
}
const result = isValid(s);
console.log(result);


// '('，')'，'{'，'}'，'['，']'

const obj = {
  "(": ")",
  "{": "}",
  "[": "]"
}
const matchBracket = (s) => {
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    const value = s[i];
    if (obj[value]) {
      arr.push(value)
    }
    // 如果是右侧
    if (!obj[value]) {
      const a = arr[arr.length - 1]
      if (obj[a] != value) {
        return false
      }
      else {
        arr.splice(-1, 1)
      }
    }
  }
  return !arr.length;
}
const result = matchBracket('[{}]');
console.log("result", result);