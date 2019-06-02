// 任何语言都要支持序列化与反序列化
// 对象和字符串相互转化

var str = "{'name':'mama','age':'50'}"

var obj = eval("("+str+")");

console.log(obj);
