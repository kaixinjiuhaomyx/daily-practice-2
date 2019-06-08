// 用缓冲区
var data = '{"id":1,"name":"laoshan"}';
// var obj = JSON.parse(data);  

console.log(data);  

// webpack 前世今生（哈哈）
<script src='1.js'></script>

<script src='2.js'></script>
// 一个页面可以写两个script标签
1.js  var a = 123;
2.js  console.log(a);
// 想要输出123的话，就要先加载1.js后加载2.js,不然输出就是undefind，如果在2.js前更改a的值，则输出就不是123，发生了全局污染

// 每个带有src属性的标签都会向服务器发起线程，请求数据
// 一个页面上有好多js，每个js都是单独发起线程到服务器取数据，
// 'require.js'解决了加载顺序的问题，就是即使某个js先回来也要等到必须的基础js回来才行


// 抓包
// 1.预处理的包头信息放在Headers里
// 2.所有的标签放在Response中
// 3.所有静态资源都单独发起一个线程被拽回来

// webpack中加入了http sever 使前端能够实现小的服务器加载静态资源，这样不用与后端沟通调试