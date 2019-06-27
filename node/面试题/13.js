console.log('script start');
let promisel = new Promise(function(resolve){
    console.log("promise1");
    resolve()
    console.log("promise1 end");

}).then(function(){
    console.log("promise2");

})
setTimeout(function(){
    console.log("srtimeout");

})
console.log("script end");

process.nextTick(function(){
    console.log("nextTick");

})
