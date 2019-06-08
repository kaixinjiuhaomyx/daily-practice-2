/*function bb(){
    url = '1234';
    // 运行结果567   1234
    var url = '1234';
    console.log(567)
    // 报错 url未定义
}

bb();
console.log(url);*/

var http = require('http');
urls = ['www.taobao.com','www.qq.com','www.jingdong.com'];

function fetchPage(url){
    var start = new Date();
    http.get({'host':url},function(res){
        // get第一个参数不能直接用url
        console.log("Get respone from "+ url);
        console.log("Request took: ",new Date() - start,'ms');
    });
}

for(var i=0; i<urls.length; i++){
    // console.log(urls[i]);
    fetchPage(urls[i]);
}