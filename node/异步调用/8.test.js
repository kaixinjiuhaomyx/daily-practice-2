1.
    POST 提交 http四大关键字 get post put delete
    get url上显示数据 最大长度为4096字节 如http://www.baidu.com/s?age=19&name=mm
    POST 传输的数据大 采用缓冲区拼接字符串 数据包 = 包头+包体

2.
    字符串转化为对象 反序列化
    var data = "{'id':1,'name':'mm'}";
    1.eval有安全性
    var obj = eval("("+data+")");

    2.JSON.parse字符串必须外单引,内双引
    var obj = JSON.parse(data);

    3.querystring.parse(str[,sep[,eq[,options]]]);
      querystring.stringify(obj[,sep[,eq[,options]]]);

    对象转化为字符串 序列化

3.node 自动加载模块
    global（node启动时即加载）、module、process、timer、console
    process.on \ process.nextTick(callback[, ...args])重要！！！
4.浏览器下的模块node不支持
5.TCP 与 UDP区别 详细？？？交互过程