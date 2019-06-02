/* 
function demo(){
    this.a =  "laoshan";
    this.bb = function(){
        console.log('call laoshan')
    }
}


module.exports = demo;
/* 相当于把demo这个类暴露给外部
*/

/*
exports.bb = function(){
    console.log('laoxie');
}*/

module.exports = {
    a : "laoshan",
    bb : function(){
        console.log('call laoshan')
    }
}