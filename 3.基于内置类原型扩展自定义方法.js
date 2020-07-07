/*
向内置类的原型上扩展方法，存在的细节知识:
  1. 为了防止自己设定的方法覆盖原有的方法，需要在方法名前加前缀
  2. 使用方便，和内置方法类似，直接让实例调用即可
  3. 方法中的this一般是当前要操作的实例
  4. 只要保证方法返回的结果是当前类的实例，那么就可以实现当前类提供的其他方法，即链式调用
*/
Array.prototype._unique = function () {
  // this => arr
  // ES6中的Set结构(不重复的数据): 返回值是Set类的实例
  // let newArr = [...new Set(this)];
  let newArr = Array.from(new Set(this));
  console.log(newArr);
  return newArr;
};
let arr = [1, 2, , 34, 54, 345, 1, 1, 1, 45, 45, 6, 6, 6, 77];
arr._unique().map((item) => item + 1);
/*
for in 遍历对象，所有可以枚举的属性都可以遍历到(大部分私有属性和自己想内置类原型上扩展的属性);
所以在处理for in循环的时候，需要添加hasOwnProperty判断(或者使用Object.keys(obj)也行,知会获取对象的私有属性)
*/
Object.prototype._todo = function () {};
let obj = {
  name: "xxx",
  age: 20,
};
for (let key in obj) {
  if (!obj.hasOwnProperty(key)) break;
  console.log(key, obj[key]);
}
Object.keys(obj).forEach((key) => {
  console.log(key, obj[key]);
});
