// 1.1
// 定义一个类
/*
function Person (){
    this.say = function(){
        console.log('I am saying ');
    };
    this.eat = function(){
        console.log('I am eating ');
    }
}
// 把类暴露给外部
module.exports = Person;
*/

// 1.2.a
/*
module.exports = {
    'say':function(){
        console.log('I am saying ');
    },
    'eat':function(){
        console.log('I am eating '); 
    }
}
*/
// 1.2.b
// 把对象公布给外部
/*
var person = new Person();
module.exports = person;
*/

// 1.3
// module.exports = ['tuantuan','yuanyuan']

// 1.4
module.exports = ['tuantuan','yuanyuan']

