<template>
    <div class="root">
        <ul>
            <li>电影</li>
            <li>音乐</li>
            <li>图书</li>
            <li>图片</li>
        </ul>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
/* 底部样式设置 
    定位时将整个div定位到底部（不能将ul定位到底部，将ul的父辈留在上边）
 */
    .root{
        position:fixed;
        bottom:0px;
        left:0px;
        background:#ff0036;
        height: 1rem;
        width:100%;
        /* flex-grow:1; */
    }
    ul{
        display:flex;
        
    }
    li{
        flex-grow:1;
        line-height:1rem;
        text-align:center;
        color:#fff;
    }
    
</style>