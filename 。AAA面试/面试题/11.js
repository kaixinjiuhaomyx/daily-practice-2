var i = '2019-09-01';
// var i = read_line();
var arr = i.split('-');
console.log(arr);

    function GuoQing(nowDay){
        if(nowDay[1]*1 > 10){
            return "国庆节快乐";
        }else if(nowDay[1]*1 < 10){
            switch(nowDay[1]*1){
            case 1:
                return (28+31*6+30*3-nowDay[2]+1);
            case 2:
                return (28+31*5+30*3-nowDay[2]+1);
            case 3:
                return (31*4+30*3-nowDay[2]+1);
            case 4:
                return (31*3+30*3-nowDay[2]+1);
            case 5:
                return (31*3+30*2-nowDay[2]+1);
            case 6:
                return (31*2+30*2-nowDay[2]+1);
            case 7:
                return (31*2+30*1-nowDay[2]+1);
            case 8:
                return (31*1+30*1-nowDay[2]+1);
            case 9:
                return (30-nowDay[2]+1);
        }
    }
}

console.log("距离国庆还有"+GuoQing(arr)+"天");