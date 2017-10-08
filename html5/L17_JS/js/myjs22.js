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

(function (){
    var n = "ime";
    function People(name) {
        this._name = name;
    }
    People.prototype.say = function () {
        alert("people hello"+this._name);
    }
    window.People = People;
}());

(function () {
    function Student(name) {
        this._name = name;
    }
    Student.prototype = new People();
    var superSay = Student.prototype.say;
    Student.prototype.say = function () {
        superSay.call(this);
        alert("student say" +this._name);
    }
    window.Student = Student;
}())
var s = new Student("michael");
s.say();