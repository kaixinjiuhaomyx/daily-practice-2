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
// 一个页面上有好多js，每个js都是单独发起线程到服务器取数据，
// require.js解决了加载顺序的问题，就是即使某个js先回来也要等到必须的基础js回来才行
