<template>
    <!-- <footer :style="{background:Footerbg}"> -->
    <footer>
        <ul>
            <li v-for='(obj,index) in menu' :key=index>
                <router-link :to="obj.path" >{{obj.name}}</router-link>
            </li>
            <!-- <li v-for='(obj,index) in menu' :key=index>
                <router-link :to="obj.path" @click.native="change(obj)">{{obj.name}}</router-link>
            </li> -->
            <!-- <li>
                <router-link to='/movie'>电影</router-link>
            </li>
             <li>
                <router-link to='/music'>音乐</router-link>
            </li>
             <li>
                <router-link to='/book'>图书</router-link>
            </li>
             <li>
                <router-link to='/photo'>图片</router-link>
            </li> -->
           
        </ul>
    </footer>
</template>
<script>
export default {
    // data(){
    //     return{
    //         bg:""
    //     }
    // },
    // props:["menu","Footerbg"],
    props:["menu"],
    // methods:{
    //     change(obj){
    //         // this.bg = obj.bg;
    //         this.$emit('HeaderBg',obj);
    //         // console.log(HeaderBg);
    //         // 注意变量代表的是啥呀  别没事就加this呀
    //     }
    // },
    // // created(){
    // //     this.bg = obj1.bg;
    // //     // console.log(obj);
    // // }
    
}
</script>
<style scoped>
    footer{
        position: fixed;
        bottom: 0rem;
        left:0rem;
        background: #f56780;
        height: 1rem;
        width: 100%;
        color: #ccc;
    }
    footer ul{
        display:flex;
    }
    li{
        flex:1;
        text-align: center;
        /* 文字居中 */
        line-height: 1rem;
    }
    .router-link-active{
        color:cornsilk;
        outline: none;
    }
    a{
        color:#000;
    }
</style>
