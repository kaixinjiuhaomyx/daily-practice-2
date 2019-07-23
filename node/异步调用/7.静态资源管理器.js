// 静态资源管理器
// 数据包要放在回调函数里  不能和异步平行  否则会发空数据包
// 获得静态资源后，要告诉浏览器,传的是什么文件，要用什么方式解析文件

var http=require('http');
var url=require('url');
var fs=require('fs');

http.createServer(function(req,res){
	// var pathname = __dirname+'/module/'+url.parse('newindex.html').pathname;//静态资源路径
	// var pathobj = fs.readFileSync(pathname,'utf-8');
	// res.writeHead(200,{"Content-type":"text/html"});
	// res.end(pathobj);

	// 加载主页（主页地址，真实地址） 添加路由
	var pathname = url.parse(req.url).pathname;
	var realname = __dirname+'/module'+pathname;
	// node是单线程 facicon.ico 是获取node网页图标,图标如果加载失败就return

	if(pathname == 'favicon.ico'){
		return;
	}else if(pathname == '/index' || pathname == '/'){
		goIndex(res);
	}else{
		// 处理静态资源  一个地址对应各自的静态资源 所以要有静态资源的地址 有解码方式 还要返回给浏览器
		dealWithStatic(pathname,realname,res);
	}
}).listen(3000);

console.log("sever start");

function goIndex(res){
	var pathname_I = __dirname +'/module/'+ url.parse('newindex.html').pathname;
	var pathobj_I = fs.readFileSync(pathname_I,'utf-8');
	
	res.writeHead(200,{"Content-type":"text/html"});
	res.end(pathobj_I);
}

function dealWithStatic(pathname,realname,res){
	// 找到文件的存在  fs模块

	fs.exists(realname,function(exists){
		console.log(exists);
		// if(!exists){
		// 	res.writeHead(404,{"Content-type":"text/plain"});
		// 	res.write("this req is wrong");
		// 	res.end();
		// }else{
		// 	var pointPosition = pathname.lastIndexOf('.');
		// 	var mmieString = pathname.substring(pointPosition+1);
		// 	console.log(mmieString);
		// }
	})
	

}