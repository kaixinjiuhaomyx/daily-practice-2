// 异步方法  学生做题
// 异步函数要有回调函数
function person(){
    this.think = function(callback){
        console.log('想想再想想');
        setTimeout(() => {
            callback();
        }, 9000);
    };

    this.anwser = function(){
        console.log("I am anwser other question");
    }
}

var Person1 = new person();
Person1.think(function(){
console.log('会了');
});

Person1.anwser();