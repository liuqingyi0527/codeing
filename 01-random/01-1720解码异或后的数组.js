var decode = function (encoded, first) {
  var arr = [first];
  for (let i = 0; i < encoded.length; i++) {
    arr.push(encoded[i] ^ arr[i]);
  }
  return arr;
};
var result = decode([6, 2, 7, 3], 4)
console.log(result);