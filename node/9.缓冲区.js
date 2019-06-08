// 读取文件

var fs = require('fs');
// 同步  把返回的值赋给变量
// var data = fs.readFileSync('./9.缓冲区','utf-8');
// console.log(data);
// <Buffer e5 ad a6 e4 b9 a0 e5 ad a6 e4 b9 a0> 缓冲区中的是十六进制编码，还需进一步处理


// 异步  把返回的值赋给回调函数的值  域
// ajax相似
fs.readFile('./9.缓冲区','utf-8',function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})

console.log('end');