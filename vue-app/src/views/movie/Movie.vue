<template>
    <div>
        <ul>
            <li v-for='(obj,index) in movieList' :key='index'>
                <img :src="obj.images.small" alt="11">
                <div class="conter">
                    <h3>{{obj.title}}</h3>
                    <p >
                        <span v-for='(arc,index) in obj.casts' :key='index'>{{arc.name}} /</span>
                    </p>
                    <p>已有{{obj.id}}人观看</p>
                    <p>{{obj.year}}</p>
                    <p>
                        <span v-for='(type,index) in obj.genres' :key=index>{{type}} /</span>
                    </p>
                    <p>{{obj.rating.average}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>

import Axios from 'axios';
export default {
    data(){
        return{
            movieList:[]
        }
    },
    created(){
        // 跨域问题（在当前域名下访问豆瓣下的数据）
        // 为了安全，有一个同源策略，域名、端口、协议都相同
        // 解决：用一个第三方的接口（服务器代理）
        // Axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/top250')
        Axios.get('/movie.json')
        .then((response)=>{
            // console.log(response);
           this.movieList = response.data.subjects;
            console.log(this.movieList);
            // console.log(response.data.subjects);
        })
        .catch((error)=> {
            console.log(error);
        });
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
</style>
