function PriorityQueue (){
    var item = [];

    var priority = function(ele, pri){
        this.ele = ele;
        this.pri = pri;
    }

    PriorityQueue.prototype.enqueue = function(ele, pri){
        var Obj = new priority(ele,pri);

        if(item.length == 0){
            item.push(Obj);
        }
        console.log(item.length);
        console.log(PriorityQueue);
        // else{
        //     var num = 0;
        //     for(var i=0; i<item.length; i++){
        //         if(Obj.priority < item[i].priority){
        //             num = i;
        //             console.log(i);
        //             break;
        //         }
        //     }
        // }
    }
}

// 测试代码
var pq = new PriorityQueue();

pq.enqueue('abc1',3);
// pq.enqueue('abc2',4);
// pq.enqueue('abc3',5);
// pq.enqueue('abc4',6);
// pq.enqueue('abc5',7);

console.log(pq);