<template>
    <div>
        <ul>
            <li>
                <img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=138126325,1485620701&fm=85&app=63&f=JPEG?w=121&h=75&s=7FAB2EC3909A35D01E299C1A030010D2" alt="">
                <div class="conter">
                    <h3>流浪地球</h3>
                    <p>屈楚萧</p>
                    <p>1005152已观看</p>
                    <p>年份</p>
                    <p>科幻</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>

import Axios from 'axios';
export default {
    created(){
        // 跨域问题（在当前域名下访问豆瓣下的数据）
        // 为了安全，有一个同源策略，域名、端口、协议都相同
        // 解决：用一个第三方的接口（服务器代理）
        Axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/in_theaters?city=广州&start=0&count=10')
        .then((response)=>{
            console.log(response);
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
        height: 2.6rem;
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
