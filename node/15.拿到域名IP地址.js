// 域名解析DNS （把域名转化IP地址）
var dns = require('dns');

dns.resolve4("www.qq.com",function(err,addresses){
    if(err){
        console.log(err);
    }else{
        console.log(addresses);
    }
});