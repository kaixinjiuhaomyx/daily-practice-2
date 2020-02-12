var n = 1;
var ans = 0;
var ii = [];
var sum = [];
var t = 0;
var oo=[];
var u =0;
for(var i = 0;i < n; i++){
    lines = 333;
    ii.push(lines);
}
for(var j = 0;j < n; j++){
    if(ii[j]<10 && ii[j]>0){
        console.log(ii[j]);
    }else if(ii[j]<10000 && ii[j]>10){
         while(((ii[j])*1-9)>0){
            oo.push(9);
            // console.log(oo);
            ii[j] = (ii[j])*1-9
        }
        oo.push(ii[j]);
        oo.reverse();
            console.log(oo);

        console.log(oo.join(''));
    }
}