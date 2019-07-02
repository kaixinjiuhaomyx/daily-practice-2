// 实现node的server服务
/*
var http = require("http");

http.createServer(function(req,res){

}).listen(3000);

console.log("server start");
*/

// 1.把index.html读入到内存（要知道：文件路径、读取方法）
// 2.把内存的数据变成数据包
// 3.把数据包发送给chrome

var http = require("http");

http.createServer(function(req,res){
    // res.writeHead(200,{'Content-type':'text/html'});
    // res.end("<h1>hello</h1>");

    console.log(__dirname);//__dirname 上一层文件的路径
    console.log(__filename);
    console.log(__dirname+'/module/'+"index.js");

}).listen(3000);

console.log("server start");
