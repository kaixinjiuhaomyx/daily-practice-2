// 任何语言都要支持序列化与反序列化
// 对象和字符串相互转化

var str = "{'name':'mama','age':'50'}"

var obj = eval("("+str+")");
// 有漏洞

console.log(obj);

// JSON.parse  也可以 注意：外边单引，里边双引