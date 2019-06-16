// 同步回调
/* function Five(Name,Callback){
    console.log('laoshan ');

    Callback();

}

// function Name(){
//     console.log('mm');
// }

function Callback(){
    var Ctime = new Date();
    var int = 0;
    while(int < 5000){
        var Ctime2 = new Date();
        int = Ctime2 - Ctime;
    }
    console.log('is over');
}

Five('laoshan',Callback);
*/
function waitFive(name,function_name){
    var pus = 0;
    var currentDate = new Date();
    function_name(name);
    while(pus < 5000){
        var now = new Date();
        pus = now - currentDate;
    }
}

function echo(name){
    console.log(name);
}

waitFive('laoshan',echo);