var arr1 = [5,4,8,1,3,7,0,9,2,6];

function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {        //相邻元素两两对比
                var temp = arr[j+1];        //元素交换
                arr[j+1] = arr[j];
                arr[j] = temp;
            } 
        }
        console.log("第"+(i+1)+"次循环",arr,'index=',index,"i=",i);
    }
    return arr;
}

bubbleSort(arr1);