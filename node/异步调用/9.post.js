var http = require("http");
var url = require("url");
var fs = require("fs");

http.createServer(function(req,res){
    // var pathname = __dirname+'/module/'+url.parse('index.html').pathname;
    var pathname = req.url;
    console.log(pathname);
    // var pathobj = fs.readFileSync(pathname,'utf-8')

    switch(pathname){
        case '/':
            goindex(res);
            break;
        case '/parse':
            gopost(req,res);
            break;
        default:
            res.writeHead(404,{"Content-type":"text/html"});
            res.end('not find');
    }
    
}).listen(3000);

console.log("sever start");


function goindex(res){
    var pathname = __dirname+'/module/'+ url.parse('index.html').pathname;
    // console.log(pathname);
    var pathobj = fs.readFileSync(pathname,'utf-8');

    res.writeHead(200,{"Content-type":"text.html"});
    res.end(pathobj);
};
function gopost(req,res){
    
}