const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'
function Promise(executor) {
  var _this = this
  this.state = PENDING; //状态
  this.value = undefined; //成功结果
  this.reason = undefined; //失败原因

  this.onFulfilled = [];//成功的回调
  this.onRejected = []; //失败的回调
  function resolve(value) {
    if (_this.state === PENDING) {
      _this.state = FULFILLED
      _this.value = value
      _this.onFulfilled.forEach(fn => fn(value))
    }
  }
  function reject(reason) {
    if (_this.state === PENDING) {
      _this.state = REJECTED
      _this.reason = reason
      _this.onRejected.forEach(fn => fn(reason))
    }
  }
  try {
    executor(resolve, reject);
  } catch (e) {
    reject(e);
  }
}
Promise.prototype.then = function (onFulfilled, onRejected) {
  if (this.state === FULFILLED) {
    typeof onFulfilled === 'function' && onFulfilled(this.value)
  }
  if (this.state === REJECTED) {
    typeof onRejected === 'function' && onRejected(this.reason)
  }
  if (this.state === PENDING) {
    typeof onFulfilled === 'function' && this.onFulfilled.push(onFulfilled)
    typeof onRejected === 'function' && this.onRejected.push(onRejected)
  }
};