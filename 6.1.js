// // 普通写法
// // function validateNum(num) {
// //   num = Number(num);
// //   return isNaN(num) ? 0 : num;
// // }

// // Number.prototype.plus = function (num) {
// //   num = validateNum(num);
// //   return this + num;
// // };

// // Number.prototype.minus = function (num) {
// //   num = validateNum(num);
// //   return this - num;
// // };
// // 闭包写法
// // 闭包的保护作用，避免全局变量污染问题
// (function (prototype) {
//   function validateNum(num) {
//     num = Number(num);
//     return isNaN(num) ? 0 : num;
//   }
//   prototype.plus = function (num) {
//     num = validateNum(num);
//     return this + num;
//   };
//   prototype.minus = function (num) {
//     num = validateNum(num);
//     return this - num;
//   };
// })(Number.prototype);
// let n = 10;
// let m = n.plus(10).minus(5);
// console.log(m); // 15

// var a = ?;
let n = 0;
Object.defineProperty(window, "a", {
  get() {
    return ++n;
  },
});

// n在那种情况下，能打印ok?
// var a = ?
if (a == 1 && a == 2 && a == 3) {
  console.log("ok");
}

let obj = {
  2: 3,
  3: 4,
  length: 2,
  push: Array.prototype.push,
};
obj.push(1);
// this => obj 
// this[this.length] = 1 => obj[2] 1
obj.push(2);
console.log(obj);
obj = {
  2: 1,
  3: 2,
  length: 4,
  push: Array.prototype.push,
};
