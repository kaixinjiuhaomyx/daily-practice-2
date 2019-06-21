<template>
    <div>
        <ul>
            <li v-for='(obj,index) in movieList' :key='index'>
                <img :src="obj.images.small" alt="11">
                <div class="conter">
                    <h3>{{obj.title}}</h3>
                    <p >
                        <span v-for='(arc,index) in obj.casts' :key='index'>{{arc.name}} |</span>
                    </p>
                    <p>已有{{obj.id}}人观看</p>
                    <p>{{obj.year}}</p>
                    <p> 
                        <span v-for='(type,index) in obj.genres' :key=index>{{type}} |</span>
                    </p>
                    <p>{{obj.rating.average}}</p>
                </div>
            </li>
        </ul>
        <img v-show="isShow" class="load" src="@/assets/imgs/loading.gif" alt="缓存">
        <div v-show ="isBot" class="bot">到底了</div>
    </div>
</template>
<script>

import Axios from 'axios';
export default {
    data(){
        return{
            movieList:[],
            isShow:false,
            isBot:false
        }
    },
    created(){
        // 跨域问题（在当前域名下访问豆瓣下的数据）
        // 为了安全，有一个同源策略，域名、端口、协议都相同
        // 解决：用一个第三方的接口（服务器代理）
        // Axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/top250')
        this.getMovie();

        window.onscroll = ()=>{
            // console.log(document.documentElement.scrollTop);
            // 滚动条滚动的高度
            // console.log(document.documentElement.clientHeight);
            // 可视区高度
            // console.log(document.documentElement.scrollHeight);
            // 整个滚动区高度
            var st = document.documentElement.scrollTop;
            var ch = document.documentElement.clientHeight;
            var sh = document.documentElement.scrollHeight;

            if(st + ch == sh){
                this.isShow = true
             
                setTimeout(()=>{
                    this.getMovie();
                    this.isShow = false
                },3000)
                
                
            if(this.movieList.length == 20){
                this.isBot = true;
            }}
        }
    },
    methods:{
        getMovie(){
            //  this.isShow = true
             
           Axios.get('/movie'+this.movieList.length+".json")
            .then((response)=>{
                // console.log(response);
            this.movieList = [...this.movieList,...response.data.subjects];
                // console.log(this.movieList);
                // console.log(response.data.subjects);
                // this.isShow = false
                   
                
                
            })
            .catch((error)=> {
                // console.log(error);
            }) 
        }
    }
}
</script>
<style scoped>
    li img{
        width:1.45rem;
        height: 3rem;
        padding: 0.2rem;
        
    }
    li{
        display: flex;
        border-bottom: 1px solid black; 
    }
    .conter{
        flex-grow:1;
    }
    .load{
        position: fixed;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%)
    }
    .bot{
        /* height: 1rem; */
    }
</style>
