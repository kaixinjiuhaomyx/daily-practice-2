<template>
    <header>
       <span id="Home">首页</span>
       电影
    </header>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    header{ 
        height:1rem;
        background:blue;
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