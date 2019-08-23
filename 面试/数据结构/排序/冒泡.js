// var old = [6,5,9,3,7,9,23,9];

// function bubbleSort(arr) {
//     var len = arr.length;
//     for (var i = 0; i < len; i++) {
//         for (var j = 0; j < len - 1 - i; j++) {
//             if (arr[j] > arr[j+1]) {        //相邻元素两两对比
//                 var temp = arr[j+1];        //元素交换
//                 arr[j+1] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     return arr;
// }

// var ne = bubbleSort(old);
// console.log(ne);

function f1() {

    var n = 999;

    nAdd = function () {
        n += 1;
        console.log(n)
    }

    function f2() {
        console.log(n);
    }
    return f2;
}
var result = f1();

result(); //  999

nAdd();  // 1000

result(); // 1000