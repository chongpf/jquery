// var person={
//     name:"michael",
//     age:30,
//     eat:function () {
//         alert(this.name+this.age+"can eat");
//         return "ok";
//     }
// }
// alert(person.eat());

// function Person() {
// }
// Person.prototype={
//     name:"michael",
//     age:30,
//     eat:function () {
//         alert("i am eating");
//     }
// }
// var p = new Person();
// p.eat();

function Person(name) {
    var _this = {};
    _this.name = name;
    _this.sayHello = function () {
        alert("Hello"+_this.name);
    }
    return _this;
}

function Teacher(name) {
    var _this = Person(name);
    _this.name = name;
    var superSay = _this.sayHello;
    _this.sayHello = function () {
        superSay.call(_this);
        alert("teacher hello"+_this.name);
    }
    return _this;
}

var t = Teacher("michael");
t.sayHello();