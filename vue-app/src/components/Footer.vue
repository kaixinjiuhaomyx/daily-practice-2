<template>
    <footer :style="{background:bg}">
        <ul>
            <li v-for='(obj,index) in menu' :key=index>
                <router-link :to="obj.path" @click.native="change(obj)">{{obj.name}}</router-link>
            </li>
        </ul>
    </footer>
</template>
<script>
export default {
    data(){
        return{
            bg:''
        }
    },
    props:["menu"],
    methods:{
        change(obj){
            this.bg = obj.bg;
            this.$emit('HeaderBg',this.bg);
        }
    }
    
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
