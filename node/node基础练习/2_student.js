var util = require("util");
var Person = require("./2_text");
// 继承
function Student(){
    Person.call(this);
    util.inherits(Student,Person);
}

Student.prototype.study = function(){
    console.log("I am learning");
}

// 把类公布给外部
module.exports = Student;