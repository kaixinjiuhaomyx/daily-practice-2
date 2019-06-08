var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'});
    res.end("<h6>asdfhello</h6>");
}).listen(8000);

console.log('server start');
// 1.执行时显示闪烁，说明这个服务被on在内存里，没有结束，在等待接受响应
// 2.在url上发送get请求，发送到我写的服务器，服务器接受request请求
// 3.200发送给浏览器，表示页面完全传输，可以正常显示了
// 4.res.end表示包体，截掉数据包
