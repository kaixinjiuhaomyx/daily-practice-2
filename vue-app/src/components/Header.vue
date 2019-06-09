<template>
    <header :style="{background:bg}">
       <span id="Home">首页</span>
       {{obj.name}}
    </header>
</template>
<script>
export default {
    data(){
        return{
            bg:'#f56780'
        }
    },
    props:["obj"]
}
</script>
<style scoped>
    header{ 
        height:1rem;
        background:#f56780;
        text-align: center;
        line-height: 1rem;
        font-size: 0.4rem;
        color:#fff;
        position:fixed;
        /* 定位后一定要加具体的位置 */
        top:0rem;
        left:0rem;
        width:100%;
        /* 给header定位后header的宽度就是内容撑的了，所以要给宽加100%  */
    }
    #Home{
        position:absolute;
        left:0.1rem;
        font-size: 0.25rem;
        font-style:normal;

    }
</style>