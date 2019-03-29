// setTimeout(function(){
//     console.log(1);
// },0);
// console.log('end');


// 58题
// for(var i=0; i<=3; i++){
//     setTimeout(function(){
//         console.log(i);
//     },0);
// }
// console.log('end');



// var start = new Date();
// setTimeout(function(){
//     var end = new Date();
//     console.log('Time waste is ',end-start,'ms');
// },500);
// while(new Date-start < 1000){}


function aa(){
    this.bb = function(){
        console.log(123);
    }
}
var AA = new aa();
// AA.bb();

aa.prototype.write = function(){
    console.log(456);
}
console.log(AA.__proto__ == aa.prototype);




