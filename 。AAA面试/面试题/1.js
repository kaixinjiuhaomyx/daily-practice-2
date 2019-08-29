obj = {
    name: 'a',
    getName : function () {
        console.log(this.name);
    }
}

var fn = obj.getName
// obj.getName()  // a
// var fn2 = obj.getName()  // a
// fn()  //undefined
// fn2() //报错 fn2不是函数
// console.log(obj.getName());
// console.log(fn);