<template>
    <div>
        <!-- <ul class="container">
            <li v-for="(obj,index) in movieList" :key="index">

                <img :src="obj.images.small" alt="图片">
                <div class="info">
                    <h4>{{obj.title}}</h4>
                    <p>
                        <span v-for="(actor,index) in obj.casts" :key="index">
                            {{actor.name}}\
                        </span>
                    </p>
                    <p>{{obj.id}}以观看</p>
                    <p>{{obj.year}}</p>
                </div>
            </li>
        </ul> -->
        <ul class="container">
            <li v-for="(obj,index) in movieList" :key="index">
                <img :src="obj.images.small" alt="">
                <div class="info">
                    <h3>{{obj.title}}</h3>
                    <p>
                        <span v-for="(actor,index) in obj.casts" :key="index">{{actor.name}}|</span>
                    </p>
                    <p>{{obj.collect_count}}已观看</p>
                    <p>年份：{{obj.year}}</p>
                    <p>
                        <span v-for="(type,index) in obj.genres" :key="index">
                            {{type}}
                        </span>
                    </p>
                </div>
            </li>
        </ul>
         
    </div>
</template>

<script>


    import Axios from "axios";
    export default {
        data(){
            return {
                movieList:[]
            }
        },
        created() {
            // jsonbird  服务器代理 解决跨域 https://bird.ioliu.cn/v1?url=
            // Axios.get("https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/top250")
            Axios.get("/movie.json")
            .then((result)=>{
                console.log(result);
                
                this.movieList = result.data.subjects
            })
            .catch();
        },  
    }
</script>

<style scoped>
    .container{
        padding:0.2rem;
    }
    li img{
        width: 90px;
        height: 123px;
        margin-top:0.2rem;
    }
    li{
        display: flex;
        border-bottom:1px solid black;
    }
    .info{
        flex-flow: 1;
        margin-left: 0.2rem;
    }
     /* .loading{
        position: fixed;
        left:50%;
        top:50%;
        transform: translate(-50%,-50%);
        width:1rem;
        height:1rem;
    } */

</style>