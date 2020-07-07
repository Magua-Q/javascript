/*面向对象底层运行机制：
 * 1. 每一个函数(自定义类/内置类/普通函数)都具有一个属性：prototype属性，即原型
 * 这个属性值是一个对象(浏览器内置开辟的堆), 在这个对象中存储的是当前类供应给实
 * 例调用的公共属性方法
 * 2. 在prototype这个对象中，内置一个constructor属性[类的构造函数], 属性值是当前类本身
 * 3. 每一个对象都具备一个属性：__proto__(原型链),属性值是当前对象(实例)所属类的prototype
 *
 */

// function Person() {
//   this.name = "bangchui";
//   this.age = 18;
//   this.say = function () {
//     console.log(`i'm is ${this.name}, i'm ${this.age}`);
//   };
// }

// var p1 = new Person();
// var p2 = new Person();
// p1.xxx 先找自己的私有属性，如果私有属性中没有，则基于__proto__找所属类原型上的公共属性和方法；
// 再没有,基于原型上的__proto__向上查找，直到找到Object.prototype为止 = 这种基于__proto__想上查找的机制，被称为"原型链查找机制"

// p1.hasOwnProperty("xxx") 检测某个属性是否为对象的私有属性 => 原理是： 基于原型链查找机制，找到Object.prototype上的hasOwnProperty方法，并且执行；
// 练习1
function Fn() {
  this.x = 100;
  this.y = 200;
  this.getX = function () {
    console.log(this.x);
  };
}
Fn.prototype.getX = function () {
  console.log(this.x);
};
Fn.prototype.getY = function () {
  console.log(this.y);
};
let f1 = new Fn();
let f2 = new Fn();
console.log(f1.getX === f2.getX); // false
console.log(f1.getY === f2.getY); // true
console.log(f1.__proto__.getY === Fn.prototype.getY); // true
console.log(f1.__proto__.getX === f2.getX); // false
console.log(f1.getX === Fn.prototype.getX); // false
console.log(f1.constructor); // Fn
console.log(Fn.prototype.__proto__.constructor); // null
f1.getX(); // 100
f1.__proto__.getX(); // undefind
f2.getY(); // 200
Fn.prototype.getY(); // undefined
// 重定向原型指向，需要注意的：1. 如果在重定向之前，在原型上设置了一些属性方法，在重定向之后，之前的都会消失；可以使用assign来合并；
// 2. 重定向之后的原型是没有constructor的，但是可以手动设置，像class中的construtor一样...
// 练习2
function fun() {
  this.a = 0;
  this.b = function () {
    alert(this.a);
  };
}
fun.prototype = {
  b: function () {
    this.a = 20;
    alert(this.a);
  },
  c: function () {
    this.a = 30;
    alert(this.a);
  },
};
var my_fun = new fun();
my_fun.b(); // '0'
my_fun.c(); // '30'
