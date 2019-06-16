// 异步练习  订餐
function haveLunch(food,drink,callback){
    console.log('吃了'+food+"和"+drink);
    // 判断回调函数类型
    if(callback && typeof(callback) === 'function'){
        // 封一个异步函数
        setTimeout(function(){
            callback();
        },2000)
    }
}

haveLunch('toast','coffee',function(){
    console.log("吃完了")
})