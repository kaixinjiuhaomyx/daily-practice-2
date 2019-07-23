// 路由实现

/* 
409种Content-type对应解析不同的的文件
查mime的w3c手册

把参数直接给一个文件是没法过滤的，参数给路径是可以过滤的
*/
var http = require("http");
var url = require("url");
var fs = require("fs");

http.createServer(function(req,res){
    console.log(req.url);
    var pathname = url.parse(req.url).pathname;
    switch(pathname){
        case '/':
            gopath(res);
            break;
        case '/pp':
            goindex(res);
            break;
        case '/img':
            goimg(res); //加载图片
            break;
        default:
            res.writeHead(404,{"Content-type":"text/html"});
            // ?????????????????????????????????????????????????????????????????????????????????????????????????????
            res.end('找不到页面gggggggggggggggg');
    };
    

    // res.writeHead(200,{'Conten-type':'text/html'});
    // res.end('hello');
}).listen(3000);

console.log('sever start');

function goindex(res){
        var pathname = __dirname+'/module/'+url.parse('index.html').pathname;
        var pathobj = fs.readFileSync(pathname,'utf-8')
        res.writeHead(200,{"Content-type":"text/html"});
        res.end(pathobj);
}

function gopath(res){
    res.writeHead(200,{"Content-type":"text/html"});
    res.end('hello');
}

function goimg(res){
    var path_img = __dirname+'/module/'+url.parse('tu.jpg').pathname;
    var img = fs.readFileSync(path_img);
    res.writeHead(200,{"Content":"image/jpeg"});
    res.end(img);
}