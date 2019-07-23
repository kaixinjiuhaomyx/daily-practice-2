// 1. 实现node的server服务
// /*
var http = require("http");

http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'}); // 包头
    res.end("<h1>hello</h1>"); // 包体
}).listen(3000);

console.log("server start");
// */

// 1.把index.html读入到内存（要知道：文件路径、读取方法）
// 2.把内存的数据变成数据包
// 3.把数据包发送给chrome

// 2.获取文件路径 url.parse

/*
var http = require("http");
var url = require('url');
http.createServer(function(req,res){
    // res.writeHead(200,{'Content-type':'text/html'});
    // res.end("<h1>hello</h1>");

    // 1.直接获取路径
    console.log(__dirname);//__dirname 上一层文件的路径
    console.log(__filename);//本文件路径
    console.log(__dirname+'/module/'+"index.js");

    // 2.url.parse(路径，) // 处理路径
    var pathname = url.parse(req.url);// 
    console.log(pathname);
    // Url {
    //     protocol: null,
    //     slashes: null,
    //     auth: null,
    //     host: null,
    //     port: null,
    //     hostname: null,
    //     hash: null,
    //     search: null,
    //     query: null,//可以获得url传的参数
    //     pathname: '/', // 记录路径
    //     path: '/', 
    //     href: '/' }


}).listen(3000);

console.log("server start");
*/


// 3. 读取方法（同步读取）
// 异步的问题：
// 1.异步读取将读取事件甩到事件队列中，数据没读取到的时候代码就向下进行，写了包头写了包体，数据包发送了，但此时是异步读取，数据没读取回来发送的数据包为空数据包。

/*
var http = require("http");
var url = require("url");
var fs = require("fs");

http.createServer(function(req,res){
////////////////////////////////////////
// 传的页面与得到的页面不同  码值问题  三码一致

    // var pathname = __dirname+'/module/'+"index.html"; // 可以这么处理 但不建议 因为本地路径与服务器路径不一致
    var pathname = __dirname + '/module/' + url.parse("index.html").pathname; //pathname 不记录参数 只记录路径
    var pathobj = fs.readFileSync(pathname,'utf-8'); // 读取
    // console.log(url.parse("index.html"));
    res.writeHead(200,{'Content-type':'text/html'});
    
    res.end(pathobj);
}).listen(3000);
console.log("serve start");
*/