<template>
    <div>
        <!-- 引用
            简单引用：$store.state.con
            在放在计算属性中返回状态，使引用简化
         -->
       <!-- <h1>{{$store.state.con}}</h1> -->
       <h1>{{con}}</h1>
       <h1>{{con1}}</h1>

       <button @click="$store.commit('add')">+</button>
       <!-- 点击bitton触发store.js中 mutations中的add方法， add接受state的数据，对其进行相应操作 -->
       <button @click="$store.commit('sub')">-</button>

    </div>
</template>
<script>
import {mapState} from 'vuex'

export default {
   data(){
    //    data要有返回值
       return{

       }
   },
   components:{
    //    add(){
    //        return this.con++;
    //    }
   },
//    computed:{
//        con(){
//            return this.$store.state.con;
//        }
//    }
    // computed:mapState({
    //     con: state => state.con,
    //     // con1: state => {
    //     //     return stste.con1++
    //     // }
        
    // })
    computed:mapState(['con','con1'])
}
</script>
<style>

</style>


