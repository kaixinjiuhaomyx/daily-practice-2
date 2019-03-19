// // 过程
// function aa(){

// }

// // 函数
// function aa(){
    
//     // return当前函数执行的最后一句
//     return 0;
// }
// // 有return的是函数 没return的是过程


var aa = function(){
    // 函数表达式
    console.log(123);
}

function aa(){
    console.log(456);
}
aa();
// 解释器、预编译、
// v8处理代码  1.预编译  先看var 给aa=undefined  再 function aa(){}加载内存（代码此时在内存）
//             2. 代码执行 var aa = undefined-->function aa(){} 覆盖掉了上一个aa（）；
//             3. aa()