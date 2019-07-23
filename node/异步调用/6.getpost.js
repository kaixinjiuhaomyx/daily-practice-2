// 1. get提交 服务器怎么接受参数

// 过滤方式最好采用对象的方式
/*
var http = require("http");
var url = require("url");
var querystring = require("querystring");

http.createServer(function(req,res){
    var pathname = url.parse(req.url).query;
    var pathobj = querystring.parse(pathname); //把字符串 转化为对象

    console.log(req.url);
    console.log(pathname);
    console.log(pathobj);
    // http://localhost:3000/?name=laoshan&age=18 得到参数为字符串，用序列化把字符串转化为对象
}).listen(3000);

console.log('sever start');
*/

// 2.http7层协议
// 事件监听
// 只要监听data和end事件
// emitter.addListener(eventName,listener); //on //
// emitter.emit();

// 物理层  数据链路层 网络层 运输层（TCP） 会话层（远程调用） 表示层（加密压缩） 应用层
/* 
    TCP与UDP的区别
    TCP需要做奇偶校验，保证数据完整性，
     应用：外网（要保证数据完整性）
    UDP不需要奇偶校验，但速度快
     应用：例如腾讯内网（让服务器与服务器之间传输快）
*/

// 3.post 提交
// get提交是url传参，post是form表单传参；读取的数据量比get多  缓冲区不能把所有东西都读完 所以要有多个缓冲区 把缓冲区拼接起来
// 三码一致  文件编码 浏览器解码 数据库编码

/*
var http = require("http");
var url = require("url");
var fs = require("fs");
var querystring = require('querystring');

http.createServer(function(req,res){
    var pathname = url.parse(req.url).pathname;

    // console.log(path);
    switch(pathname){
        case '/':
            goindex(res);
            break;
        case '/parse':
            resAdd(res,req);
            break
        default:
            res.writeHead(404,{"Content-type":"text/plain"});
            res.end('找不到页面gggggggggggggggg');
    }; 
}).listen(3000);

console.log('sever start');

function goindex(res){
        var pathname = __dirname+'/module/'+url.parse('index.html').pathname;
        var pathobj = fs.readFileSync(pathname,'utf-8')
        res.writeHead(200,{"Content-type":"text/html"});
        res.end(pathobj);
}

// post实现
function resAdd(res,req){

    console.log(111111111111);
    // console.log(req);
    var postData = ""; // 拼接多个缓冲区
    // 设置编码（浏览器的编码为utf8）
    req.setEncoding('utf8');
    // utf8 三码一致
    // 接收数据时触发data事件   postChunk 缓冲区发的数据 浏览器持续发的数据
    req.addListener('data',function(postChunk){

        console.log(333333333);
        console.log(postChunk);
        postData += postChunk;
    });

    // 结束事件触发end事件
    req.addListener('end',function(){
        // console.log(222222);
        console.log(postData);
        var dnsobj = querystring.parse(postData);
        var dnsstr = dnsobj.search_dns;

        res.writeHead(200,{"Content-type":"text/plain"});
        res.end(dnsstr);

    });
}
*/
