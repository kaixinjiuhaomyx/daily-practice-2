// 执行5.require.js时输出4的结果
// 早期类的调用是在同一个文件（作用域）下进行的，有了require之后才可以进行不同文件之间的类调用

var AA = require('./4.require1.js');
// 1.用require封装
// 2.封装后要暴露出去

// 怎么暴露呢？

console.log(AA);

