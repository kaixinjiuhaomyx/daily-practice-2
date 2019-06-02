// 读取9.缓冲区,停2s再结束
var fs = require('fs');

fs.readFile('./9.缓冲区','utf-8',function(err,data){
    if(err){
        console.log(err);
    }else{
        // console.log('123');
        console.log(data);
        getData(data);
    }
});


function getData(data){
        console.log(data);
        // console.log('123');
    setTimeout(() => {
        // console.log('123');
        console.log(data);
    }, 2000);
}