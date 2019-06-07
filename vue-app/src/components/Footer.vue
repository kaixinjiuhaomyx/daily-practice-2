<template>
    <footer>
        <ul>
            <li v-for='(obj,index) in menu' :key=index>
                <router-link :to="obj.path">{{obj.name}}</router-link>
            </li>
        </ul>
    </footer>
</template>
<script>
export default {
    props:["menu"]
    
}
</script>
<style scoped>
    footer{
        position: fixed;
        bottom: 0rem;
        left:0rem;
        background: blue;
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
