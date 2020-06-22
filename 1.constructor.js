function Person() {
  this.name = "bangchui";
  this.age = 18;
  this.say = function () {
    console.log(`i'm is ${this.name}, i'm ${this.age}`);
  };
}

var p1 = new Person();
var p2 = new Person();
// new Person.say();

// new Person().say();
console.log(p1 == p2);
console.log(p1.say === p2.say);
console.log(p1 === p2);
console.log(p1.name === p2.name);
// 检测当前实例是否属于这个类
console.log(p1 instanceof Person);
// 检测某个对象是否具有某个属性【in】
console.log("age" in p1);
// 检测属性是否为该对象的私有属性【hasOwnProperty】
console.log(p1.hasOwnProperty("say"));

function Foo() {
  // window
  getName = function () {
    // alert(1);
    console.log(1);
  };

  return this; // window
}
Foo.getName = function () {
  //   alert(2);
  console.log(2);
};
Foo.prototype.getName = function () {
  //   alert(3);
  console.log(3);
};
var getName = function () {
  //   alert(4);
  console.log(4);
};
function getName() {
  //   alert(5);
  console.log(5);
}

Foo.getName();
getName();
Foo().getName();
getName();

new Foo.getName();

new Foo().getName();

new new Foo().getName();
