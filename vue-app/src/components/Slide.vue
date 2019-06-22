<template>
    <div class="imgUl">
        
        <ul class="su">
            <transition-group name='lun'>
                <li v-for="(src,index) in booklist" :key="index" v-show='isNow==index'>
                    <img :src="src" alt="">
                </li>
            </transition-group>
        </ul>
        

        <ul class="st">
            <li class="stop" v-for="(stop,index) in booklist.length" :key='index' :class='{active:isNow==index}'>
            </li>
        </ul>
    </div>
    
</template>

<script>
    export default {
        data(){
            return{
                // booklist:[
                //     "https://img3.doubanio.com/lpic/s24468373.jpg",
                //     "https://img3.doubanio.com/lpic/s27102925.jpg",
                //     "https://img3.doubanio.com/lpic/s6989253.jpg",
                //     "https://img3.doubanio.com/lpic/s6985053.jpg"
                // ],
                isNow:0,
                // bookList:bookList
            }
        },
        props:["booklist"],
        created(){
            setInterval(()=>{
                this.isNow++
                if(this.isNow == this.booklist.length){
                    this.isNow = 0;
                }
            },2000)
        }
    }
</script>

<style  scoped>
    .su img{
        width: 6.4rem;
        height: 8rem;

    }
    .su li{
        position:absolute;
        top:0rem;
        left:0rem;

    }
    .st li{
        width: 0.25rem;
        height:0.25rem;
        border-radius: 50%;
        background: #aaa;
        float: left;
        margin:0.1rem;

    }
    .st{
       position:absolute;
        left:50%;
        transform: translate(-50%,-50%);
        top:8.2rem; 

    }
    .st li.active{
        background:#8909ff;
    }
    .lun-enter{
        transform: translateX(100%)
    }
    .lun-enter-active{
        transition: transform 2s ease;
    }
    .lun-enter-to{
        transform: translateX(0)
    }
    .lun-leave{
        transform: translateX(0)
    }
    .lun-leave-active{
        transition: transform 2s ease;      
    }
    .lun-leave-to{
        transform: translateX(-100%)
    }
    .imgUL{
        position: relative;
        height:8.5rem;
        overflow: hidden;
    }
    .su{
        overflow: hidden;
        position: relative;
        height:8.5rem;   
    }
</style>