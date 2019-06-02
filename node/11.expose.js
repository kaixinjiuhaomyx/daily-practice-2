// 让10.expose1调用10.expose中的方法bb
var Demo = require('./10.expose');

console.log(Demo);
// 执行结果为空对象，但node 10.expose中有东西不是空对象，所以要把node 10.expose中的内容暴露出来


/* 当10.expose把demo这个类暴露给外部时（module.exports = demo;）
执行结果[Function: demo]  
这是Demo是类，可以New
*/
// var demo = new Demo();
// demo.bb();
// 调到了bb方法  执行结果为call laoshan



/* 当node 10.expose.js 中用
exports.bb = function(){
    console.log('laoxie');
}时，10.expose1中接收的是一个对象bb，bb中含有一个函数
*/
// Demo.bb();